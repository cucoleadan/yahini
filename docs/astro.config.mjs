// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration/
export default defineConfig({
	site: 'https://documentation.yahini.io',
	integrations: [
		starlight({
			title: 'Yahini Docs',
			description: 'How to use Yahini: keyword research, content planning, briefs and drafts in one workspace.',
			logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', replacesTitle: true },
			favicon: '/favicon.ico',
			customCss: ['./src/styles/theme.css'],
			social: [
				{ icon: 'external', label: 'Open Yahini', href: 'https://app.yahini.io' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/cucoleadan/yahini' },
			],
			// GitHub is the CMS: every page links to its Markdown file, and a push to main redeploys.
			editLink: { baseUrl: 'https://github.com/cucoleadan/yahini/edit/main/docs/' },
			lastUpdated: true,
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'What is Yahini?', slug: 'index' },
						'getting-started/create-account',
						'getting-started/first-project',
						'getting-started/workspace',
					],
				},
				// `features-functionality/…` URLs are linked from the app's onboarding tour; keep them stable.
				{
					label: 'Using Yahini',
					items: [
						'features-functionality/projects',
						'features-functionality/keyword-research',
						'features-functionality/workbook-strategy',
						'features-functionality/briefs-and-drafts',
						'features-functionality/brand-intelligence',
						'features-functionality/competitors-and-topics',
						'features-functionality/search-console',
					],
				},
				{
					label: 'Account and billing',
					items: ['account/plans-and-billing', 'account/credits', 'account/team', 'account/settings'],
				},
				{ label: 'Integrations', items: ['integrations/mcp'] },
				{ label: 'Help', items: ['help/faq', 'help/support'] },
			],
		}),
	],
});
