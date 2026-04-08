import qrcode
from io import BytesIO
from django.core.files.base import ContentFile
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4

def generate_kebele_id_card(resident):
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    c.drawString(100, height-50, "ETHIOPIAN KEBELE ID CARD")
    c.drawString(100, height-80, f"Name: {resident.first_name} {resident.last_name}")
    c.drawString(100, height-100, f"ID: {resident.id_card_number}")
    qr = qrcode.make(f"https://kebele.gov.et/verify/{resident.id_card_number}")
    qr_buffer = BytesIO()
    qr.save(qr_buffer, 'PNG')
    c.drawInlineImage(qr_buffer, 400, height-150, width=80, height=80)
    c.save()
    buffer.seek(0)
    return ContentFile(buffer.read(), name=f"id_{resident.id}.pdf")
