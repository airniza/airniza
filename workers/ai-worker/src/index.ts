type RequestBody = {
  prompt: string;
};

export default {
  async fetch(req: Request, env: any) {
    if (req.method !== "POST") {
      return new Response("Only POST allowed", { status: 405 });
    }

    const { prompt } = (await req.json()) as RequestBody;

    const result = await env.AI.run(
      "@cf/meta/llama-3-8b-instruct",
      {
        messages: [
          {
            role: "system",
            content:
              "You are an air quality expert. Write clear, factual, SEO-friendly content."
          },
          {
            role: "user",
            content: prompt
          }
        ]
      }
    );

    return Response.json({
      output: result.response
    });
  }
};
