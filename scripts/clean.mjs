import { rmSync } from 'fs';
(() => {
	try {
		rmSync('dist', { recursive: true, force: true });

		if (process.argv.map((f) => f.toLowerCase()).includes('--full')) {
			rmSync('node_modules', { recursive: true, force: true });
			rmSync('pnpm-lock.yaml', { recursive: true, force: true });
		}
	} catch (error) {
		console.error(error);
	}
})();
