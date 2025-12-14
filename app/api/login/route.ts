import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  console.log("");
  console.log("logowanie: ");
  console.log(email);
  console.log(password);
  console.log(new Date().toLocaleString("pl-PL"));

  const testEmail = "";
  const testPassword = "";

  if (email === testEmail && password === testPassword) {
    console.log("logowanie udane");
    return NextResponse.json({ success: true, message: "Zalogowano pomyślnie" });
  } else {
    console.log("logowanie nieudane");
    console.log("Nieprawidłowy email lub hasło");
    return NextResponse.json(
      { success: false, message: "Nieprawidłowy email lub hasło" },
      { status: 401 }
    );
  }
}
