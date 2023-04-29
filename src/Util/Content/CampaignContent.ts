
export const getTimeEstimate = (
	total_activities: string | number | null | undefined
) => {
	if (!total_activities) {
		return "0 minutes";
	}
	const min = Number(total_activities);
	const max = Number(total_activities) * 2;

	const minSeconds = min * 30;
	const maxSeconds = max * 30;

	let minMinutes = Math.floor(minSeconds / 60);
	let maxMinutes = Math.floor(maxSeconds / 60);

	minMinutes = minMinutes < 1 ? 1 : minMinutes;
	maxMinutes = maxMinutes < 1 ? 1 : maxMinutes;

	if (minMinutes === maxMinutes) {
		return `${minMinutes} Minutes`;
	}

	return `${minMinutes} - ${maxMinutes} Minutes`;
};


export const getTimeEstimateAvg = (
	total_activities: string | number | null | undefined
) => {
	if (!total_activities) {
		return "0 min";
	}
	const min = Number(total_activities);
	const max = Number(total_activities) * 2;

	const minSeconds = min * 30;
	const maxSeconds = max * 30;

	let minMinutes = Math.floor(minSeconds / 60);
	let maxMinutes = Math.floor(maxSeconds / 60);

	minMinutes = minMinutes < 1 ? 1 : minMinutes;
	maxMinutes = maxMinutes < 1 ? 1 : maxMinutes;

	if (minMinutes === maxMinutes) {
		return `${minMinutes} min`;
	}

	const avgMinutes = Math.floor((minMinutes + maxMinutes) / 2);

	return `${avgMinutes} min`;
};
