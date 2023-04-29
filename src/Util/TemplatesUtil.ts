import {TemplateCategory, TemplateItem, TemplateSubCategory} from "../Types/TemplatesTypes";
import {getTemplateDetailRoute, ROUTES} from "../routes/PagesRoutes";

export const getFilteredTemplatesBySlug = (templatesData: TemplateCategory[], template_slug: string) => {
  if (templatesData.length > 0 && template_slug) {

    for (let i = 0; i < templatesData.length; i++) {
      const category = templatesData[i];
      const templates = category?.templates || [];
      for (let j = 0; j < templates.length; j++) {
        const template = templates[j];
        if (template.slug === template_slug) {
          return template;
        }
      }

      const subCategories = category?.subcategories || [];
      for (let j = 0; j < subCategories.length; j++) {
        const subCategory = subCategories[j];
        const templates = subCategory?.templates || [];
        for (let k = 0; k < templates.length; k++) {
          const template = templates[k];
          if (template.slug === template_slug) {
            return template;
          }
        }
      }
    }
  } else {
    return null;
  }
}

export const getRawTemplateData = (templatesData: TemplateCategory[], template_slug?: string | null) => {
  let data: TemplateItem[] = [];
  if (templatesData.length > 0) {
    for (const element of templatesData) {
      const category = element;
      const templates = category?.templates || [];
      for (const element of templates) {
        data.push(element);
      }

      const subCategories = category?.subcategories || [];
      for (const element of subCategories) {
        const templates = element?.templates || [];
        for (const element of templates) {
          data.push(element);
        }
      }
    }
  }

  if (template_slug) {
    data = data.filter((item) => item.slug !== template_slug);
  }
  return data;
}


const parseItem = (item: TemplateItem) => {
  return {
    to: getTemplateDetailRoute(item.slug, item.category.slug, item.subcategory?.slug),
    name: item.name,
  }
}

const parseCategory = (category: TemplateCategory) => {
  return {
    to: ROUTES.TEMPLATES,
    name: category.name,
  }
}


export const getTemplatesMenuData = (templatesData: TemplateCategory[]) => {
  const rawTemplatesData = getRawTemplateData(templatesData);
  const sortedTemplates = rawTemplatesData.sort((a, b) => b.creation_count - a.creation_count);
  const topTemplates = sortedTemplates.slice(0, 3).map(element => parseItem(element));


  const groupMain = {
    groupName: 'MAIN TEMPLATES',
    sub: rawTemplatesData.slice(0, 3).map(element => parseItem(element))
  }

  const groupCategories = {
    groupName: 'MAIN CATEGORIES',
    sub: templatesData.map(element => parseCategory(element))
  }
  const groupPopular = {
    groupName: 'POPULAR TEMPLATES',
    sub: topTemplates
  }

  return {
    name: "Templates",
    subGroup: [groupMain, groupCategories, groupPopular],
    features: [
      {
        imgSrc: "",
        title: "Blog Name #2",
      },
      {
        imgSrc: "",
        title: "Blog Name #2",
      },
    ],
  }
}

export const filterTemplatesByText = (templatesData: TemplateCategory[], searchText: string) => {
  const rawTemplatesData = getRawTemplateData(templatesData);
  const filteredTemplates = rawTemplatesData.filter((item) => {
    const name = item.name.toLowerCase();
    const description = item.description?.toLowerCase();
    const searchTextLower = searchText.toLowerCase();
    return name.includes(searchTextLower) || description?.includes(searchTextLower);
  })

  const category = {
    id: "result",
    name: "",
    description: "",
    order: 0,
    slug: "",
    templates: filteredTemplates
  }

  return [category] as TemplateCategory[];
}

export const filterTemplatesByCategory = (templatesData: TemplateCategory[], category_id: string, subcategory_id: string | null) => {
  const filteredCategories = templatesData.filter((item) => {
    if (subcategory_id) {
      return item.id === category_id && item.subcategories?.find((sub) => sub.id === subcategory_id);
    } else {
      return item.id === category_id;
    }
  })

  let data = []

  if (subcategory_id && filteredCategories.length > 0) {
    for (const element of filteredCategories) {
      data.push({...element, templates: []})
    }
  } else {
    data = filteredCategories;
  }


  return data;
}
