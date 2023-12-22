import { ThemeController } from "../Actions";

export const Calculator = () => {
  return (
    <div className="max-w-md w-full bg-neutral/70 text-neutral-content md:rounded-3xl md:h-auto h-full">
      <div className="h-56 p-6 flex flex-col justify-end relative">
        <span className="absolute top-10 left-6 font-medium">Calc</span>
        <ThemeController />
        <div className="text-right text-5xl">0</div>
      </div>
      <div className="grid grid-cols-4 gap-6 p-6 rounded-3xl bg-neutral text-neutral-content">
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn col-span-2"></button>
        <button className="btn"></button>
        <button className="btn btn-error"></button>
      </div>
    </div>
  );
};
