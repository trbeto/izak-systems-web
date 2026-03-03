import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Recibimos los datos del formulario (¡Ahora con el teléfono incluido!)
    const { nombre, empresa, email, telefono, mensaje } = await req.json();

    // Configuramos tu cuenta de correo
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Si usas Outlook u otro, esto cambia
      auth: {
        user: process.env.CORREO_IZAK,
        pass: process.env.PASSWORD_IZAK,
      },
    });

    // Armamos el correo que te va a llegar a ti
    const mailOptions = {
      from: process.env.CORREO_IZAK,
      to: process.env.CORREO_IZAK, // Te lo envías a ti mismo como alerta
      subject: `🔥 Nuevo Lead Izak Systems: ${nombre} de ${empresa || 'Independiente'}`,
      text: `Tienes un nuevo prospecto desde la página web:
        
Nombre: ${nombre}
Empresa: ${empresa || 'No especificada'}
Email: ${email}
WhatsApp/Teléfono: ${telefono || 'No proporcionado'}
        
Mensaje:
${mensaje}
      `,
    };

    // Damos la orden de envío
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return new Response(JSON.stringify({ error: 'Fallo al enviar el mensaje' }), { status: 500 });
  }
}