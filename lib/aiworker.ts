type AIResponse = {
  output: string;
};

export async function fetchAIContent(prompt: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_WORKER_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  if (!res.ok) throw new Error("Worker AI fetch failed");

  const data = (await res.json()) as AIResponse;
  return data.output;
}
