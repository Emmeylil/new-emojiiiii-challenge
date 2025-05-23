export enum Role {
	ADMIN = 'admin',
	CHILD = 'child',
	TEACHER = 'teacher',
	PARENT = 'parent',
	GUEST = 'guest'
}

export const footerExclusionList = [
	'/blogs/*',
	'/courses/*',
	'/campaigns/*',
	'/services/*',
	'/partners/*'
];

export function isExcludedFromFooter(path: string): boolean {
	return footerExclusionList.some((pattern) => {
		if (pattern.endsWith('/*')) {
			const basePath = pattern.slice(0, -2); // Remove /* from the end
			return path.startsWith(basePath);
		}
		return path === pattern;
	});
}
