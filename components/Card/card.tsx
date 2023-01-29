interface Props {
  title: string
  children: React.ReactNode
}

export default function Card({ title, children }: Props) {
  return (
    <div className="border-green border-2 bg-dark-green rounded w-80 h-auto flex flex-col justify-center items-center flex-wrap">
      <h1 className="text-2xl flex-auto">{title}</h1>
      {children}
    </div>
  )
}
