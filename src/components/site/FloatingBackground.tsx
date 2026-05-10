export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full -3xl animate-pulse bottom-[-200px] right-[-200px]" />
    </div>
  );
}