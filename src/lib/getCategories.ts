import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsPath = path.join(process.cwd(), "content/docs");

export function getCategoriesAndItems() {
  const categories: Record<
    string,
    {
      slug: string;
      title: string;
      description?: string;
    }[]
  > = {};
  const categoryMeta: Record<
    string,
    {
      title: string;
      icon?: string;
      description?: string;
    }
  > = {};
  const categoryFolders = fs.readdirSync(docsPath);

  categoryFolders.forEach((folder) => {
    const folderPath = path.join(docsPath, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      // Read category-level metadata from index.mdx if it exists
      const indexPath = path.join(folderPath, "index.mdx");
      if (fs.existsSync(indexPath)) {
        const indexSource = fs.readFileSync(indexPath, "utf8");
        const { data } = matter(indexSource);
        categoryMeta[folder] = {
          title: data.title || folder,
          icon: data.icon,
          description: data.description || "",
        };
      } else {
        categoryMeta[folder] = { title: folder };
      }
      const files = fs
        .readdirSync(folderPath)
        .filter((f) => f.endsWith(".mdx") && f !== "index.mdx");
      categories[folder] = files.map((file) => {
        const filePath = path.join(folderPath, file);
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);
        return {
          slug: `${folder}/${file.replace(/\.mdx$/, "")}`,
          title: data.title || file.replace(/\.mdx$/, ""),
          description: data.description || "",
        };
      });
    }
  });

  // Return both categories and categoryMeta
  return { categories, categoryMeta };
}
