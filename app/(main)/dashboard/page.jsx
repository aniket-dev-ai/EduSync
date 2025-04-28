import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import Dashboard from "./_components/Dashboard";
import { getAssessments } from "@/actions/interview";

const IndustryInsightsPage = async () => {
    const {isOnboarded} = await getUserOnboardingStatus();
    const assessments = await getAssessments();

    // if(!isOnboarded){
    //     redirect("/onboarding");
    //     return null; 
    // }
    // first user is onboarded then get the industryInsights
    // const insights = await getIndustryInsights();
    return (
        <div className="container mx-auto"> 
            {/* <Dashboard insights={insights} assessments={assessments} /> */}
            <Dashboard />
        </div>
    );
};

export default IndustryInsightsPage;