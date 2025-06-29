import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsPath = path.join(process.cwd(), "content/docs");

export function getCategoriesAndItems() {
  const categories: Record<
    string,
    { slug: string; title: string; description?: string }[]
  > = {};
  const categoryFolders = fs.readdirSync(docsPath);

  categoryFolders.forEach((folder) => {
    const folderPath = path.join(docsPath, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      const files = fs
        .readdirSync(folderPath)
        .filter((f) => f.endsWith(".mdx"));
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

  return categories;
}
