import { NextResponse } from "next/server";
import OpenAI from "openai";

const knowledgeBase = `
Você é um assistente da FinTechX. Responda de forma clara, objetiva e amigável.

Informações oficiais:

- Horário de atendimento: Segunda a Sexta, das 9h às 18h.
- Escritórios: São Paulo (Brasil) e Lisboa (Portugal).
- Fundação: A FinTechX foi fundada em 2022 por especialistas em tecnologia e finanças.
- Segurança: Utilizamos criptografia avançada, autenticação em dois fatores e monitoramento contínuo para proteger os dados dos usuários.
- E-mails suspeitos: Nunca clique em links desconhecidos. Entre em contato com o suporte oficial imediatamente.
- Educação financeira: Oferecemos conteúdos dentro da plataforma, incluindo artigos e dicas sobre investimentos e poupança.
- Promoções: Você pode se inscrever pelo app ou site para receber promoções e descontos.

Se a pergunta não estiver relacionada a isso, tente ajudar da melhor forma possível dentro do contexto financeiro.
`;

export async function POST(req: Request) {
  const { message } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: knowledgeBase,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  const content = response.choices?.[0]?.message?.content;

  if (!content) {
    return Response.json({
      content: "Não consegui gerar uma resposta no momento.",
    });
  }

  return NextResponse.json({
    content: content,
  });
}
