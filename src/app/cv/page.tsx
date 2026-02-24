import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { CommandMenu } from "@/components/command-menu";
import { SectionErrorBoundary } from "@/components/section-error-boundary";
import { SectionSkeleton } from "@/components/section-skeleton";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Summary } from "./components/Summary";
import { WorkExperience } from "./components/WorkExperience";

export const metadata: Metadata = {
    title: `${RESUME_DATA.name} - CV`,
    description: RESUME_DATA.about,
    openGraph: {
        title: `${RESUME_DATA.name} - CV`,
        description: RESUME_DATA.about,
        type: "profile",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: `${RESUME_DATA.name} - CV`,
        description: RESUME_DATA.about,
    },
};

function getCommandMenuLinks() {
    const links = [];

    if (RESUME_DATA.personalWebsiteUrl) {
        links.push({
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
        });
    }

    return [
        ...links,
        ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
        })),
    ];
}

export default function CVPage() {
    const structuredData = generateResumeStructuredData();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            {/* Navigation */}
            <nav className="fixed top-4 left-4 right-4 z-50 print:hidden flex justify-between items-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/90 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 backdrop-blur-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Back to Home
                </Link>
                <a
                    href="/Resume.pdf"
                    download="Muhammad_Ali_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/90 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 backdrop-blur-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Download PDF
                </a>
            </nav>

            <main
                className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16 pt-16"
                id="main-content"
            >
                <div className="sr-only">
                    <h1>{RESUME_DATA.name}&apos;s CV</h1>
                </div>

                <section
                    className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
                    aria-label="CV Content"
                >
                    <SectionErrorBoundary sectionName="Header">
                        <Suspense fallback={<SectionSkeleton lines={4} />}>
                            <Header />
                        </Suspense>
                    </SectionErrorBoundary>

                    <div className="space-y-8 print:space-y-4">
                        <SectionErrorBoundary sectionName="Summary">
                            <Suspense fallback={<SectionSkeleton lines={2} />}>
                                <Summary summary={RESUME_DATA.summary} />
                            </Suspense>
                        </SectionErrorBoundary>

                        <SectionErrorBoundary sectionName="Work Experience">
                            <Suspense fallback={<SectionSkeleton lines={6} />}>
                                <WorkExperience work={RESUME_DATA.work} />
                            </Suspense>
                        </SectionErrorBoundary>

                        <SectionErrorBoundary sectionName="Education">
                            <Suspense fallback={<SectionSkeleton lines={3} />}>
                                <Education education={RESUME_DATA.education} />
                            </Suspense>
                        </SectionErrorBoundary>

                        <SectionErrorBoundary sectionName="Skills">
                            <Suspense fallback={<SectionSkeleton lines={2} />}>
                                <Skills skills={RESUME_DATA.skills} />
                            </Suspense>
                        </SectionErrorBoundary>

                        <SectionErrorBoundary sectionName="Projects">
                            <Suspense fallback={<SectionSkeleton lines={5} />}>
                                <Projects projects={RESUME_DATA.projects} />
                            </Suspense>
                        </SectionErrorBoundary>
                    </div>
                </section>

                <nav className="print:hidden" aria-label="Quick navigation">
                    <CommandMenu links={getCommandMenuLinks()} />
                </nav>
            </main>
        </>
    );
}
