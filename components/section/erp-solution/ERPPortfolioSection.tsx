import { getProjectsByCategory } from "@/services/projects.service";
import ERPPortfolioClient, { PortfolioProject } from "./ERPPortfolioClient";

export default async function ERPPortfolioSection() {
    // Fetch projects with category 'erp' (case insensitive search usually depends on DB, but here we pass 'erp')
    // Note: The user prompt mentioned "category erp". Ensure "erp" or "ERP" matches what's used in DB.
    // If exact match is required and DB uses "ERP System", this might need adjustment.
    // However, for now we will try fetching 'ERP' or 'erp'.

    // Let's assume the user meant projects tagged/categorized as related to ERP.
    // Since we don't know the exact category names in DB without checking data, 
    // we'll try a flexible approach or just fetch 'ERP'.

    const dbProjects = await getProjectsByCategory("ERP Solution");

    // Transform Prisma projects to the PortfolioProject interface expected by the client component
    // We map 'description' to the fields needed. 
    // In a real scenario, we might want to store JSON in description or add fields.
    const mappedProjects: PortfolioProject[] = dbProjects.map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        description: p.description,
        imageUrls: p.imageUrls,
        urlProject: p.urlProject
    }));

    return <ERPPortfolioClient projects={mappedProjects} />;
}
