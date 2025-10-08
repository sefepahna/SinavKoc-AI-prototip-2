import { PlanGorevi, Konu } from '../data/mockData';

export interface AIRecommendation {
  message: string;
  suggestedTopics: string[];
}

export async function getPlanRecommendation(
  tasks: PlanGorevi[],
  weakTopics: Konu[]
): Promise<PlanGorevi[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const updatedTasks = tasks.map(task => {
    const isWeakTopic = weakTopics.some(
      topic => task.konu.toLowerCase().includes(topic.konu.toLowerCase())
    );

    if (isWeakTopic) {
      return {
        ...task,
        sure: Math.round(task.sure * 1.2),
        oncelik: 'Yüksek' as const
      };
    }

    return task;
  });

  return updatedTasks;
}

export async function getTopicRecommendations(
  weakTopics: Konu[]
): Promise<string[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  return weakTopics
    .filter(t => t.eksikMi)
    .slice(0, 2)
    .map(t => `${t.ders} - ${t.konu}`);
}

export async function getMotivationalMessage(
  streak: number,
  weeklyProgress: number
): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 300));

  if (streak >= 7) {
    return `Muhteşem! ${streak} gündür aralıksız çalışıyorsun! Bu hafta hedefinin %${weeklyProgress}\'ini tamamladın. 🔥`;
  } else if (weeklyProgress >= 80) {
    return `Harika gidiyorsun! Bu hafta hedefinin %${weeklyProgress}\'ini tamamladın. Devam et! 💪`;
  } else {
    return `İyi ilerliyorsun! Bu hafta %${weeklyProgress} tamamlama oranındasın. Hedefine ulaşmak için biraz daha çaba göster! 🎯`;
  }
}
