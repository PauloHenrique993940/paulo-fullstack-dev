from datetime import date
from pathlib import Path

import openpyxl
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
XLSX = ROOT / "src/assets/Planilha_Completa_Mentoria_Erica_Lorena_PREENCHIDA.xlsx"
PDF = ROOT / "src/assets/Devolutiva_Mentoria_Erica_Lorena_Paulo_Henrique.pdf"

wb = openpyxl.load_workbook(XLSX, data_only=True)


def rows(sheet_name, start=5):
    sheet = wb[sheet_name]
    return [list(row) for row in sheet.iter_rows(min_row=start, values_only=True) if any(value is not None for value in row)]


vagas = rows("01 - Vagas")
competencias = rows("02 - Competências")
competitividade = rows("03 - Competitividade")
gaps = rows("04 - Gaps")
plano = rows("06 - Plano 7 Dias")

NAVY = colors.HexColor("#0B1F33")
BLUE = colors.HexColor("#2F80ED")
GOLD = colors.HexColor("#F4C542")
CREAM = colors.HexColor("#F2F6FB")
INK = colors.HexColor("#151515")
MUTED = colors.HexColor("#5C5A54")
LINE = colors.HexColor("#D8C99D")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=30, leading=34, textColor=CREAM, alignment=TA_CENTER, spaceAfter=16))
styles.add(ParagraphStyle(name="CoverSub", parent=styles["Normal"], fontName="Helvetica", fontSize=13, leading=18, textColor=BLUE, alignment=TA_CENTER))
styles.add(ParagraphStyle(name="PageTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=26, leading=30, textColor=INK, alignment=TA_CENTER, spaceAfter=14))
styles.add(ParagraphStyle(name="SectionTitle", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=15, leading=19, textColor=GOLD, alignment=TA_CENTER, spaceBefore=10, spaceAfter=8))
styles.add(ParagraphStyle(name="Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=10.5, leading=15, textColor=INK, alignment=TA_LEFT, spaceAfter=8))
styles.add(ParagraphStyle(name="Small", parent=styles["BodyText"], fontName="Helvetica", fontSize=8, leading=10, textColor=INK))
styles.add(ParagraphStyle(name="SmallWhite", parent=styles["BodyText"], fontName="Helvetica", fontSize=8, leading=10, textColor=CREAM))
styles.add(ParagraphStyle(name="CardTitle", parent=styles["Heading3"], fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=GOLD, alignment=TA_CENTER, spaceAfter=6))
styles.add(ParagraphStyle(name="CardText", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.5, leading=13, textColor=CREAM, alignment=TA_CENTER))


def p(text, style="Body"):
    return Paragraph(str(text).replace("&", "&amp;"), styles[style])


def gold_rule(width=14 * cm):
    table = Table([[""]], colWidths=[width], rowHeights=[0.08 * cm])
    table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), GOLD), ("LINEBELOW", (0, 0), (-1, -1), 0, GOLD)]))
    return table


def page_background(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY if doc.page == 1 else CREAM)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setStrokeColor(GOLD)
    canvas.setLineWidth(1.1)
    canvas.rect(1.05 * cm, 1.05 * cm, A4[0] - 2.1 * cm, A4[1] - 2.1 * cm, fill=0, stroke=1)
    canvas.setLineWidth(0.35)
    canvas.rect(1.28 * cm, 1.28 * cm, A4[0] - 2.56 * cm, A4[1] - 2.56 * cm, fill=0, stroke=1)
    canvas.setFillColor(GOLD)
    canvas.setFont("Helvetica", 8)
    canvas.drawCentredString(A4[0] / 2, 0.7 * cm, f"DEVOLUTIVA DE MENTORIA  •  PÁGINA {doc.page}")
    canvas.restoreState()


class DevolutivaDoc(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(filename, pagesize=A4, leftMargin=1.8 * cm, rightMargin=1.8 * cm, topMargin=1.8 * cm, bottomMargin=1.5 * cm)
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="normal")
        self.addPageTemplates([PageTemplate(id="all", frames=frame, onPage=page_background)])


story = []

# Page 1: neutral cover
story += [Spacer(1, 4.2 * cm), p("PAULO HENRIQUE", "CoverTitle"), p("DEVOLUTIVA PROFISSIONAL", "CoverSub"), gold_rule(9 * cm), Spacer(1, 1.0 * cm), p("MAPA DE COMPETITIVIDADE E MERCADO", "CoverTitle"), Spacer(1, 0.6 * cm), p("Desenvolvedor Full Stack Júnior", "CoverSub"), Spacer(1, 4.0 * cm), p("Documento construído a partir da planilha preenchida e das referências de vagas analisadas.", "CoverSub"), PageBreak()]

# Page 2: objective and market reading
story += [p("1. O objetivo deste material", "PageTitle"), gold_rule(), Spacer(1, 0.5 * cm), p("Esta devolutiva organiza o que o mercado está pedindo para posições de estágio e desenvolvimento Full Stack júnior, compara essas exigências com as evidências atuais do seu perfil e transforma a análise em prioridades práticas.")]
objective = Table([[p("PREMISSA ESTRATÉGICA", "CardTitle")], [p("Não basta enviar candidaturas. É preciso demonstrar, com projetos e comunicação clara, que você consegue construir uma aplicação completa e evoluir tecnicamente com consistência.", "CardText")]], colWidths=[15.5 * cm])
objective.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("BOX", (0, 0), (-1, -1), 1, GOLD), ("INNERPADDING", (0, 0), (-1, -1), 12)]))
story += [Spacer(1, 0.5 * cm), objective, Spacer(1, 0.6 * cm), p("Leitura do conjunto analisado", "SectionTitle"), p(f"Foram consideradas {len(vagas)} referências na planilha. O padrão mais claro é a combinação de front-end com React, fundamentos de JavaScript/TypeScript, Git, APIs, banco de dados e capacidade de explicar o que foi construído. Para estágio, aparecem formação em andamento e portfólio; para júnior, aumentam as exigências de arquitetura, cloud, testes e experiência comprovável.")]
summary = Table([[p("O que o mercado mais repete", "CardTitle"), p("O que isso significa para você", "CardTitle")], [p("React, TypeScript, Git, HTML/CSS, Node.js, APIs REST e SQL aparecem com frequência.", "CardText"), p("A base já existe no seu portfólio. O próximo salto é transformar essa base em evidências técnicas mais fáceis de verificar.", "CardText")]], colWidths=[7.7 * cm, 7.7 * cm])
summary.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("BOX", (0, 0), (-1, -1), 1, GOLD), ("INNERGRID", (0, 0), (-1, -1), 0.5, GOLD), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10), ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10)]))
story += [summary, PageBreak()]

# Page 3: vacancies
story += [p("2. Leitura de mercado", "PageTitle"), gold_rule(), Spacer(1, 0.3 * cm), p("As 10 referências abaixo servem como base de comparação. As duas últimas são páginas públicas de busca e devem ser confirmadas antes de uma candidatura específica.")]
headers = ["Vaga / empresa", "Cargo", "Fonte", "Modalidade", "Requisitos que se repetem"]
data = [[p(h, "SmallWhite") for h in headers]]
for row in vagas:
    name, cargo, modalidade, fonte, link, data_ref, diferencial, requisitos, experiencia, formacao, observacao = (row + [None] * 11)[:11]
    req = (requisitos or diferencial or "Não informado")
    data.append([p(name or "Não informado", "Small"), p(cargo or "Não informado", "Small"), p(fonte or "Não informado", "Small"), p(modalidade or "A confirmar", "Small"), p(req[:190], "Small")])
table = Table(data, colWidths=[3.0 * cm, 3.2 * cm, 1.8 * cm, 2.2 * cm, 5.3 * cm], repeatRows=1)
table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), NAVY), ("TEXTCOLOR", (0, 0), (-1, 0), CREAM), ("GRID", (0, 0), (-1, -1), 0.35, LINE), ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F2EEE3")]), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 5), ("RIGHTPADDING", (0, 0), (-1, -1), 5), ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5)]))
story += [table, PageBreak()]

# Page 4: strengths and competitiveness
story += [p("3. Mapa de competitividade", "PageTitle"), gold_rule(), Spacer(1, 0.4 * cm), p("A leitura da planilha indica que sua principal vantagem é ter projetos práticos suficientes para sustentar uma narrativa Full Stack. O ponto de atenção é tornar essas provas mais objetivas e fáceis de validar.")]
strengths = Table([[p("JÁ TENHO E CONSIGO PROVAR", "CardTitle"), p("TENHO PARCIALMENTE", "CardTitle"), p("PRECISO DESENVOLVER", "CardTitle")], [p("React e TypeScript<br/>Git e GitHub<br/>HTML/CSS e responsividade<br/>PostgreSQL em projetos<br/>Deploy em Vercel/Supabase", "CardText"), p("Node.js e APIs REST<br/>Testes Jest/Cypress<br/>Cloud e CI/CD<br/>Documentação de arquitetura", "CardText"), p("Prova sistemática de testes<br/>Pipeline de entrega<br/>README técnico completo<br/>Comunicação dos resultados", "CardText")]], colWidths=[5.15 * cm] * 3)
strengths.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("BOX", (0, 0), (-1, -1), 1, GOLD), ("INNERGRID", (0, 0), (-1, -1), 0.5, GOLD), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10), ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10)]))
story += [strengths, Spacer(1, 0.7 * cm), p("Diferenciais que devem aparecer na sua comunicação", "SectionTitle")]
for item in ["Você já construiu aplicações completas, e não apenas telas isoladas.", "Seu portfólio mostra contexto de negócio, como estoque, financeiro, rastreio e marketplace.", "Você consegue transitar entre interface, API, dados e deploy."]:
    story.append(p(f"• {item}"))
story += [Spacer(1, 0.4 * cm), p("Posicionamento recomendado", "SectionTitle"), p("Desenvolvedor Full Stack Júnior com experiência prática em React, TypeScript, Node.js e PostgreSQL, capaz de construir aplicações responsivas e explicar suas decisões técnicas do problema ao deploy."), PageBreak()]

# Page 5: gaps and decision
story += [p("4. Gaps e prioridades", "PageTitle"), gold_rule(), Spacer(1, 0.3 * cm), p("Nem todo gap precisa virar um curso agora. A prioridade deve ser aquilo que aparece no mercado e que mais aumenta a força das evidências já existentes.")]
gap_data = [[p(h, "SmallWhite") for h in ["Gap", "Frequência", "Impacto", "Prioridade", "Como fortalecer"]]]
for row in gaps:
    gap, freq, impact, priority, action = (row + [None] * 10)[:5]
    gap_data.append([p(gap or "", "Small"), p(freq or "", "Small"), p(impact or "", "Small"), p(priority or "", "Small"), p(action or "", "Small")])
gap_table = Table(gap_data, colWidths=[3.2 * cm, 2.0 * cm, 2.0 * cm, 2.0 * cm, 6.3 * cm], repeatRows=1)
gap_table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), NAVY), ("GRID", (0, 0), (-1, -1), 0.35, LINE), ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F2EEE3")]), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 5), ("RIGHTPADDING", (0, 0), (-1, -1), 5), ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5)]))
story += [gap_table, Spacer(1, 0.6 * cm), p("Decisão estratégica", "SectionTitle"), p("Desenvolver agora: adicionar testes automatizados e melhorar a documentação de arquitetura em um case principal. Em seguida, criar um pipeline simples de build/teste. Não é necessário começar outro projeto antes de fortalecer as provas dos projetos já existentes."), PageBreak()]

# Page 6: plan and next session
story += [p("5. Plano de 7 dias", "PageTitle"), gold_rule(), Spacer(1, 0.3 * cm), p("O objetivo da semana é transformar a leitura do mercado em entregas concretas para a próxima conversa de mentoria.")]
plan_data = [[p(h, "SmallWhite") for h in ["Dia", "Ação", "Entrega"]]]
for row in plano:
    day, action, delivery = (row + [None] * 9)[:3]
    plan_data.append([p(day or "", "Small"), p(action or "", "Small"), p(delivery or "", "Small")])
plan_table = Table(plan_data, colWidths=[1.2 * cm, 7.2 * cm, 7.1 * cm], repeatRows=1)
plan_table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), NAVY), ("GRID", (0, 0), (-1, -1), 0.35, LINE), ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F2EEE3")]), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6), ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6)]))
story += [plan_table, Spacer(1, 0.5 * cm), p("Para a próxima sessão", "SectionTitle"), p("Levar um case com testes executando, README revisado e uma explicação curta da arquitetura. O objetivo não é parecer sênior; é mostrar fundamentos sólidos, evolução consciente e capacidade prática."), Spacer(1, 0.4 * cm), p("Conclusão", "SectionTitle"), p("Seu perfil já tem aderência para buscar oportunidades de estágio e posições Full Stack júnior. A maior oportunidade agora está em comunicar melhor o que você já construiu, fortalecer testes e organizar as evidências em torno de poucos cases fortes."), Spacer(1, 0.6 * cm), gold_rule(9 * cm), Spacer(1, 0.4 * cm), p("Material preparado para a próxima sessão de mentoria", "Small")]

DevolutivaDoc(str(PDF)).build(story)
print(PDF)
