import { Card, CardContent } from "@/components/ui/card"

export default function TerminalIntro() {
    return (
        <Card className="hover:shadow-xl max-w-xl font-bold bg-muted/50 backdrop-blur-sm">
            <div className="ml-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <CardContent className="p-6 font-mono text-lg leading-relaxed">
                <p className="text-muted-foreground">$ greeting</p>
                <p className="mt-2">Hello World 👋</p>

                <div className="mt-4 space-y-1">
                    <p>&gt; species: Homo sapiens</p>
                    <p>&gt; name: Wayne Guo</p>
                    <p>&gt; PID: McMaster student</p>
                    <p>&gt; core: Markham-ON-CA 🇨🇦; Shunde-GuangDong-CN 🇨🇳</p>
                    <p className="text-muted-foreground">
                        &gt; status: Still compiling life...
                    </p>
                    <span className="animate-pulse">▍</span>
                </div>
            </CardContent>
        </Card>
    )
}