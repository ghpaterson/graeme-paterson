export default function RowFour() {
  return (
    <section
      id="row-four"
      className="grid h-[50vh] md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4"
    >
      <div className=" md:col-span-4 rounded-lg bg-slate-300"></div>
      <div className=" md:col-span-8 rounded-lg bg-slate-400 flex flex-col justify-between">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Photography - Central Wales</h1>
        </div>
        <div className="w-full h-[90%] bg-Farm bg-cover rounded-md"></div>
      </div>
    </section>
  );
}
