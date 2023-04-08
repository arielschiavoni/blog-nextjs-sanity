import Logo from './Logo'

export default function Header({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <header className="flex flex-col items-center bg-[#B5947F] md:flex-row">
      <Logo />
      <div className="pl-10 text-2xl text-gray-700">
        <h1 className="text-2xl">{title}</h1>
        <h2 className="text-1xl">{subtitle}</h2>
      </div>
    </header>
  )
}
