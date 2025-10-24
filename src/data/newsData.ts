export interface NewsItem {
  id: number;
  slug: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  contentEn: string;
  contentAr: string;
  date: string;
  imageUrl?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    slug: "world-scout-conference-43",
    titleEn: "Participation in the 43rd World Scout Conference",
    titleAr: "المشاركة في المؤتمر الكشفي العالمي الـ43",
    descriptionEn: "Representing Egypt at the World Scout Conference in Cairo",
    descriptionAr: "تمثيل مصر في المؤتمر الكشفي العالمي بالقاهرة",
    contentEn: `The 43rd World Scout Conference was held in Cairo, Egypt, bringing together scout leaders and representatives from around the globe. As a representative of the Arab Republic of Egypt, I had the honor of participating in this historic gathering.

The conference focused on key issues affecting youth development, international cooperation, and the future of the scouting movement. Discussions included strategic planning for the next decade, youth engagement initiatives, and strengthening partnerships across regions.

This event provided an invaluable opportunity to exchange ideas with international colleagues, share Egypt's scouting achievements, and contribute to shaping the global scouting agenda for the coming years.`,
    contentAr: `عُقد المؤتمر الكشفي العالمي الـ43 في القاهرة، مصر، حيث جمع قادة وممثلي الكشافة من جميع أنحاء العالم. وبصفتي ممثلاً لجمهورية مصر العربية، كان لي شرف المشاركة في هذا التجمع التاريخي.

ركز المؤتمر على القضايا الرئيسية التي تؤثر على تنمية الشباب والتعاون الدولي ومستقبل الحركة الكشفية. تضمنت المناقشات التخطيط الاستراتيجي للعقد القادم، ومبادرات إشراك الشباب، وتعزيز الشراكات عبر المناطق.

وفرت هذه الفعالية فرصة لا تقدر بثمن لتبادل الأفكار مع الزملاء الدوليين، ومشاركة إنجازات الكشافة المصرية، والمساهمة في تشكيل أجندة الكشافة العالمية للسنوات القادمة.`,
    date: "2024-10-01",
    imageUrl: ""
  },
  {
    id: 2,
    slug: "arab-scout-committee-meeting",
    titleEn: "Meeting with Arab Scout Committee Leadership",
    titleAr: "لقاء مع قيادة اللجنة الكشفية العربية",
    descriptionEn: "Strategic discussions on youth development programs",
    descriptionAr: "مناقشات استراتيجية حول برامج تنمية الشباب",
    contentEn: `A productive meeting was held with the leadership of the Arab Scout Committee to discuss strategic initiatives for youth development across the Arab region.

The discussions centered on enhancing youth participation in decision-making processes, developing innovative programs that address contemporary challenges, and strengthening cooperation between Arab scout organizations.

Key outcomes included the establishment of new youth advisory mechanisms, plans for regional training programs, and commitments to increase youth representation in leadership positions throughout the Arab scouting community.`,
    contentAr: `عُقد اجتماع مثمر مع قيادة اللجنة الكشفية العربية لمناقشة المبادرات الاستراتيجية لتنمية الشباب في جميع أنحاء المنطقة العربية.

تركزت المناقشات على تعزيز مشاركة الشباب في عمليات صنع القرار، وتطوير برامج مبتكرة تعالج التحديات المعاصرة، وتعزيز التعاون بين المنظمات الكشفية العربية.

تضمنت النتائج الرئيسية إنشاء آليات استشارية جديدة للشباب، وخطط لبرامج التدريب الإقليمية، والتزامات بزيادة تمثيل الشباب في المناصب القيادية في جميع أنحاء المجتمع الكشفي العربي.`,
    date: "2024-09-15",
    imageUrl: ""
  },
  {
    id: 3,
    slug: "youth-advisors-forum-2024",
    titleEn: "Youth Advisors Forum 2024",
    titleAr: "منتدى مستشاري الشباب 2024",
    descriptionEn: "Annual gathering of youth advisors from across the Arab region",
    descriptionAr: "التجمع السنوي لمستشاري الشباب من جميع أنحاء المنطقة العربية",
    contentEn: `The Youth Advisors Forum 2024 brought together young leaders and advisors from across the Arab region for three days of intensive workshops, networking, and strategic planning.

The forum addressed critical topics including climate action, digital literacy, peace building, and youth employment. Participants engaged in collaborative sessions to develop action plans and initiatives that will be implemented throughout the region.

This annual gathering serves as a vital platform for youth voices to be heard and for young leaders to connect, share experiences, and work together towards common goals for the advancement of youth in the Arab world.`,
    contentAr: `جمع منتدى مستشاري الشباب 2024 القادة الشباب والمستشارين من جميع أنحاء المنطقة العربية لمدة ثلاثة أيام من ورش العمل المكثفة والتواصل والتخطيط الاستراتيجي.

تناول المنتدى موضوعات حاسمة بما في ذلك العمل المناخي، والمعرفة الرقمية، وبناء السلام، وتوظيف الشباب. شارك المشاركون في جلسات تعاونية لتطوير خطط عمل ومبادرات سيتم تنفيذها في جميع أنحاء المنطقة.

يعمل هذا التجمع السنوي كمنصة حيوية لسماع أصوات الشباب وللقادة الشباب للتواصل وتبادل الخبرات والعمل معًا نحو أهداف مشتركة للنهوض بالشباب في العالم العربي.`,
    date: "2024-08-20",
    imageUrl: ""
  }
];

export function getNewsById(id: number): NewsItem | undefined {
  return newsData.find(item => item.id === id);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find(item => item.slug === slug);
}
