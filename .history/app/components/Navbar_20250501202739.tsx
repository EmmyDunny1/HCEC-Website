{d.children && (
  <div className="absolute top-10 bg-amber-50 text-black w-[13rem] transition-all text-[12px] border-t-4 border-red-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
    {d.children.map((ch, j) => (
      <a key={j} href={ch.link ?? "#"} className="py-2 px-4 hover:text-red-500">
        {ch.label}
      </a>
    ))}
  </div>
)}
