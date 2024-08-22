'use client'
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';


export default function CheckCookie({link}) {
    const router = useRouter();
    var loginCookie = Cookie.get('loginCookie')
    if (loginCookie != null || loginCookie != undefined) {
        loginCookie = JSON.parse(loginCookie)
        if (link == loginCookie.naid_id) {
            return
        } else {
            alert('Unauthorized Access, please login with your account')
            router.push(`/invite_view/${link}`);
        }
    } else {
        alert('Unauthorized Access, please login with your account')
        router.push(`/invite_view/${link}`);
    }
}