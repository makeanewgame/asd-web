import { createClient } from "@/src/lib/supabase/client";

export default async function Instruments() {
    const supabase = await createClient();
    const { data: instruments } = await supabase.from("Projects").select();
    const test = await supabase.from("Projects").select();
    console.log("Test:", test);
    return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}

