export default function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="from-background via-background/90 to-background absolute inset-0 bg-linear-to-b" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
    </div>
  );
}
