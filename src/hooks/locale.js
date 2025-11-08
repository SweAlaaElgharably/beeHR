'use server';
import { cookies } from "next/headers";

export async function getUserLocale(){
    const c = await cookies();
    return c.get("Bee_HR_Locale")?.value || "en";
} 

export async function setUserLocale(lang){
    const c = await cookies();
    c.set("Bee_HR_Locale", lang);
}