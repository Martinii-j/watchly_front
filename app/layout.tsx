
export const metadata = {
    title: 'Moja Aplikacja Next.js',
    description: 'Stworzona z Next.js',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl">
            <body>{children}</body>
        </html>
    )
}