export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1a1b1e]">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
}
