// Ye layout Next.js ke default CSS aur JS ko block karega
export default function WebStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Yahan hum <html> aur <body> tags nahi denge kyunki 
    // wo hum page.tsx ke dangerouslySetInnerHTML se bhej rahe hain.
    <>{children}</>
  );
}