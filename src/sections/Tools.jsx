import React, { useState } from "react";
import toolImages from "../assets/images/index";
import ToolsCard from "../components/ToolsCard/ToolsCard";
import { useTranslation } from "react-i18next";

const tools = [
  {
    id: 1,
    name: "Prometheus",
    category: "Devops",
    image: toolImages.Prometheus,
  },
  { id: 2, name: "Loki", category: "Devops", image: toolImages.Loki },
  { id: 3, name: "Bitbucket", category: "Devops", image: toolImages.Bitbucket },
  { id: 4, name: "Gitlab", category: "Devops", image: toolImages.Gitlab },
  { id: 5, name: "Kotlin", category: "Mobile", image: toolImages.Kotlin },
  { id: 6, name: "Android", category: "Mobile", image: toolImages.Android },
  { id: 7, name: "Java", category: "Backend", image: toolImages.Java },
  { id: 8, name: "Azure", category: "Infrastructure", image: toolImages.Azure },
  { id: 9, name: "Next.JS", category: "Frontend", image: toolImages.NextJS },
  { id: 10, name: "React.JS", category: "Frontend", image: toolImages.ReactJS },
  {
    id: 11,
    name: "Javascript",
    category: "Frontend",
    image: toolImages.Javascript,
  },
  { id: 12, name: "Figma", category: "UX/UI", image: toolImages.Figma },
  { id: 13, name: "GCP", category: "Infrastructure", image: toolImages.GCP },
  {
    id: 14,
    name: "Digital Ocean",
    category: "Infrastructure",
    image: toolImages.DigitalOcean,
  },
  { id: 15, name: "AWS", category: "Infrastructure", image: toolImages.AWS },
  {
    id: 16,
    name: "Kubernetes",
    category: "Infrastructure",
    image: toolImages.Kubernetes,
  },
  { id: 17, name: "ELK", category: "Devops", image: toolImages.ELK },
  { id: 18, name: "Grafana", category: "Devops", image: toolImages.Grafana },
  {
    id: 19,
    name: "Terraform",
    category: "Devops",
    image: toolImages.Terraform,
  },
  { id: 20, name: "IOS", category: "Mobile", image: toolImages.IOS },
  { id: 21, name: "Swift", category: "Mobile", image: toolImages.Swift },
  { id: 22, name: "Flutter", category: "Mobile", image: toolImages.Flutter },
  { id: 23, name: "Balsamic", category: "UX/UI", image: toolImages.Balsamic },
  { id: 24, name: "Invision", category: "UX/UI", image: toolImages.Invision },
  { id: 25, name: "Docker", category: "Devops", image: toolImages.Docker },
  {
    id: 26,
    name: "PostgreSQL",
    category: "Backend",
    image: toolImages.PostgreSQL,
  },
  { id: 27, name: "Python", category: "Backend", image: toolImages.Python },
  { id: 28, name: "Node.JS", category: "Backend", image: toolImages.NodeJS },
  { id: 29, name: "PHP", category: "Backend", image: toolImages.PHP },
  { id: 30, name: "GO", category: "Backend", image: toolImages.GO },
  {
    id: 31,
    name: "Ant Design",
    category: "Frontend",
    image: toolImages.AntDesign,
  },
  {
    id: 32,
    name: "Gatsby.JS",
    category: "Frontend",
    image: toolImages.GatsbyJS,
  },
  { id: 33, name: "Vue.JS", category: "Frontend", image: toolImages.VueJS },
  { id: 34, name: "Principle", category: "UX/UI", image: toolImages.Principle },
  { id: 35, name: "Sketch", category: "UX/UI", image: toolImages.Sketch },
  {
    id: 36,
    name: "Adobe suite",
    category: "UX/UI",
    image: toolImages.Adobesuite,
  },
  { id: 37, name: "YouTrack", category: "Testing", image: toolImages.YouTrack },
  { id: 38, name: "Appium", category: "Testing", image: toolImages.Appium },
  { id: 39, name: "Cypress", category: "Testing", image: toolImages.Cypress },
  { id: 40, name: "Jmeter", category: "Testing", image: toolImages.Jmeter },
  { id: 41, name: "MongoDB", category: "Backend", image: toolImages.MongoDB },
  {
    id: 42,
    name: "Cassandra",
    category: "Backend",
    image: toolImages.Cassandra,
  },
  { id: 43, name: "Sass", category: "Frontend", image: toolImages.Sass },
  {
    id: 44,
    name: "Material UI",
    category: "Frontend",
    image: toolImages.MaterialUI,
  },
  { id: 45, name: "Zeplin", category: "UX/UI", image: toolImages.Zeplin },
];

const Tools = () => {
  const [sortedTools, setSortedTools] = useState(tools);
  const [activeCategory, setActiveCategory] = useState(null);
  const { t } = useTranslation();

  const sortTools = (category) => {
    const sorted = tools.filter((tool) => tool.category === category);
    setSortedTools(sorted);
    setActiveCategory(category);
  };

  const resetFilter = () => {
    setSortedTools(tools);
    setActiveCategory(null);
  };

  return (
    <section className="bg-[#F4F7FF] pb-[100px]">
      <div className="container mx-auto p-4 md:p-8">
        <h2
          className="pt-[60px] font-bold text-2xl md:text-4xl text-primary mb-4 md:mb-8 text-[#1B5BF7] text-[30px] md:text-[60px] pb-[20px] md:pb-[40px]"
          style={{ lineHeight: "1.2" }}
        >
          {t("tools.title")}
        </h2>
        <div className="filters pb-[50px] flex flex-wrap gap-2 justify-center md:justify-start">
          <button
            className={`outline-none cursor-pointer py-2 px-4 ${
              activeCategory === null
                ? "bg-[#A8BFFF] text-white"
                : "bg-white text-primary"
            } rounded-md`}
            onClick={resetFilter}
          >
            {t("tools.all")}
          </button>
          {[
            "Frontend",
            "Backend",
            "Devops",
            "Testing",
            "UX/UI",
            "Infrastructure",
            "Mobile",
          ].map((category) => (
            <div onClick={() => sortTools(category)}>
              <button
                key={category}
                className={`outline-none cursor-pointer py-2 px-4 ${
                  activeCategory === category
                    ? "bg-[#A8BFFF] text-white"
                    : "bg-white text-primary"
                } rounded-md`}
                onClick={() => sortTools(category)}
              >
                {t(`tools.${category.toLowerCase()}`)}
              </button>
            </div>
          ))}
        </div>
        <div className="tools-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <ToolsCard
              key={tool.id}
              color={
                activeCategory === tool.category || activeCategory === null
                  ? "#A8BFFF"
                  : "white"
              }
              img={tool.image}
              title={tool.name}
              height={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
