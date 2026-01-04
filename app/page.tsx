"use client";

export default function Home() {
  return (
    <div>
      {Array.from({ length: 100 }).map((_e, i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
}
