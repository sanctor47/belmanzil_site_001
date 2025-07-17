// components/LanguageSwitcher.js
'use client'; // This must be a client component

import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';

export default function LanguageSwitcher() {
    const pathname = usePathname();

    // This function generates the new path for the other language
    const getSwitcherPath = (currentLocale: string) => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        if (currentLocale === 'en') {
            segments[1] = 'ar';
        } else {
            segments[1] = 'en';
        }
        return segments.join('/');
    };

    const currentLocale = pathname.split('/')[1] || 'en';
    const newPath = getSwitcherPath(currentLocale);

    return (
        <div className="p-4">
            <Button asChild variant="ghost" size="sm" className="text-[#eedac2] hover:text-[#e58754]">
                <Link href={newPath}>
                    <Globe className="w-4 h-4 mr-2" />
                    {currentLocale === 'en' ? 'العربية' : 'English'}
                </Link>
            </Button>
        </div>
    );
}