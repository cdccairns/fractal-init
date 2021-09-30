'use strict';

const fractal = module.exports = require('@frctl/fractal').create();

/**
 * Use Fractal's Twig template engine adapter for components.
 *
 * {@link https://github.com/frctl/fractal/tree/main/packages/twig}
 */

const twig = require('@frctl/twig');
const adapter = twig({
  importContext: true,
  handlePrefix: '%',
  base: '/'
});

fractal.components.engine(adapter);
fractal.components.set('ext', '.twig');

/**
 * Set directory paths.
 *
 * {@link https://fractal.build/guide/components/configuration-reference.html#path}
 * {@link https://fractal.build/guide/documentation/configuration-reference.html#path}
 * {@link https://fractal.build/guide/web/configuration-reference.html#static-path}
 */

fractal.components.set('path', `${__dirname}/src/templates`);
fractal.docs.set('path', `${__dirname}/src/pages`);
fractal.web.set('static.path', `${__dirname}/dist`);

/**
 * Set project labels.
 *
 * {@link https://fractal.build/guide/project-settings.html#project-related-metadata}
 * {@link https://fractal.build/guide/components/configuration-reference.html#label}
 * {@link https://fractal.build/guide/components/configuration-reference.html#title}
 */

fractal.set('project.title', 'Theme');
fractal.components.set('label', 'Templates');
fractal.components.set('title', 'Templates');

/**
 * Provide context data from JSON files.
 *
 * {@link https://fractal.build/guide/components/configuration-reference.html#default-context}
 */

const data = require(`${__dirname}/src/data/index.json`);

fractal.components.set('default.context', {
  data
});

/**
 * Disable default statuses.
 *
 * {@link https://fractal.build/guide/core-concepts/statuses.html#default-statuses}
 */

fractal.components.set('default.status', null);
fractal.docs.set('default.status', null);

/**
 * Configure theme.
 *
 * {@link https://fractal.build/guide/web/default-theme.html#configuration}
 */

const mandelbrot = require('@frctl/mandelbrot');
const theme = mandelbrot({
  nav: [
    'search',
    'docs',
    'components'
  ],
  panels: [
    'html',
    'view',
    'notes'
  ],
  skin: {
    name: 'white',
  },
  styles: [
    'default'
  ]
});

fractal.web.theme(theme);

/**
 * Configure Browsersync server.
 *
 * {@link https://fractal.build/guide/web/configuration-reference.html#server-sync}
 */

fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
  port: 4000,
  notify: false,
  open: true,
  ui: false
});

/**
 * Set build destination.
 *
 * {@link https://fractal.build/guide/web/configuration-reference.html#builder-dest}
 */

fractal.web.set('builder.dest', `${__dirname}/docs`);
