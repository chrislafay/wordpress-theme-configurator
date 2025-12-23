export const previewElements = [
  {
    name: 'Large Centered Text',
    slug: 'large-centered-text',
    category: 'headers',
    description: 'Full-width hero with eyebrow, headline, copy, and paired buttons.',
    html: `
      <div class="wp-block-group alignfull has-primary-background-color" style="padding:64px 24px; text-align:center; color: var(--wp--preset--color--{{PRIMARY_CONTRAST}});">
        <p class="eyebrow" style="margin:0 auto 12px; letter-spacing:0.2em; text-transform:uppercase; font-weight:600;">
          Elevated headline
        </p>
        <h1 style="margin:0 auto 12px; max-width:840px;">Large Centered Text</h1>
        <p class="has-large-font-size" style="margin:0 auto 24px; max-width:760px; opacity:0.9; line-height:1.5;">
          A single WP Group with eyebrow, headline, supporting paragraph, and paired buttons. Uses the Primary background and respects your selected contrast color.
        </p>
        <div class="wp-block-buttons" style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
          <div class="wp-block-button">
            <a class="wp-block-button__link has-primary-background-color" style="color: var(--wp--preset--color--{{PRIMARY_CONTRAST}}); padding:12px 20px; border-radius: var(--custom--radius); box-shadow: var(--custom--shadow); border: 1px solid transparent;">
              Primary Button
            </a>
          </div>
          <div class="wp-block-button is-style-outline">
            <a class="wp-block-button__link" style="color: var(--wp--preset--color--{{PRIMARY_CONTRAST}}); padding:12px 20px; border-radius: var(--custom--radius); box-shadow: var(--custom--shadow); border: 1px solid var(--wp--preset--color--{{PRIMARY_CONTRAST}});">
              Outline Button
            </a>
          </div>
        </div>
      </div>
    `
  },
  {
    name: 'Bold Primary Banner',
    slug: 'bold-primary-banner',
    category: 'headers',
    description: 'Compact primary hero with supporting text and button.',
    html: `
      <div class="has-primary-background-color" style="padding:32px; border-radius:18px; color: var(--wp--preset--color--{{PRIMARY_CONTRAST}}); box-shadow: var(--custom--shadow);">
        <p class="text-sm" style="text-transform:uppercase; letter-spacing:0.2em;">Layout A</p>
        <h2 style="margin-top:8px; font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem); font-weight:700;">Bold hero using primary color</h2>
        <p style="margin-top:8px; max-width:720px; opacity:0.9; line-height:1.6;">
          Buttons pull custom radius and shadow tokens for a consistent look across the system.
        </p>
        <button style="margin-top:16px; padding:12px 16px; font-weight:600; border-radius: var(--custom--radius); box-shadow: var(--custom--shadow); background-color: var(--wp--preset--color--dark); color: var(--wp--preset--color--white); border: 1px solid transparent;">
          Primary Action
        </button>
      </div>
    `
  },
  {
    name: 'Split Secondary Hero',
    slug: 'split-secondary-hero',
    category: 'headers',
    description: 'Two-column hero with media on the left and secondary background on the right.',
    html: `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--gap-default); background-color: var(--wp--preset--color--light); padding:24px; border-radius:18px; box-shadow: var(--custom--shadow);">
        <div style="background-color: var(--wp--preset--color--light); border: 1px solid var(--wp--preset--color--light); border-radius:16px; min-height:200px;"></div>
        <div class="has-secondary-background-color" style="border-radius:16px; padding:24px; color: var(--wp--preset--color--{{SECONDARY_CONTRAST}});">
          <p style="text-transform:uppercase; letter-spacing:0.2em; font-size:0.85rem;">Layout B</p>
          <h3 style="margin-top:8px; font-size: clamp(1.5rem, 1.4vw + 1rem, 2rem); font-weight:700;">Split hero with secondary</h3>
          <p style="margin-top:8px; opacity:0.9;">
            Content area inherits the text contrast you selected in the Colors section.
          </p>
          <button style="margin-top:16px; padding:12px 16px; font-weight:600; border-radius: var(--custom--radius); border-width: var(--custom--border-width); border-style: var(--custom--border-style); border-color: var(--wp--preset--color--{{SECONDARY_CONTRAST}}); color: var(--wp--preset--color--{{SECONDARY_CONTRAST}}); background: transparent;">
            Ghost Button
          </button>
        </div>
      </div>
    `
  },
  {
    name: 'Three Column Grid',
    slug: 'three-column-grid',
    category: 'layouts',
    description: 'Responsive three-column layout that uses the default spacing gap.',
    html: `
      <div style="padding:24px; border-radius:18px; box-shadow: var(--custom--shadow); background-color: var(--wp--preset--color--light);">
        <p style="font-weight:600;">3-Column Grid</p>
        <div style="margin-top:16px; display:grid; gap: var(--gap-default); grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
          <div class="has-light-background-color" style="border-radius: var(--custom--radius); padding:16px; box-shadow: var(--custom--shadow); border: 1px solid var(--wp--preset--color--light);">
            <h4 style="font-size:1.1rem; font-weight:600;">Column 1</h4>
            <p style="font-size:0.95rem;">Gap uses spacing Step {{DEFAULT_GAP}} configured in the sidebar.</p>
          </div>
          <div class="has-light-background-color" style="border-radius: var(--custom--radius); padding:16px; box-shadow: var(--custom--shadow); border: 1px solid var(--wp--preset--color--light);">
            <h4 style="font-size:1.1rem; font-weight:600;">Column 2</h4>
            <p style="font-size:0.95rem;">Gap uses spacing Step {{DEFAULT_GAP}} configured in the sidebar.</p>
          </div>
          <div class="has-light-background-color" style="border-radius: var(--custom--radius); padding:16px; box-shadow: var(--custom--shadow); border: 1px solid var(--wp--preset--color--light);">
            <h4 style="font-size:1.1rem; font-weight:600;">Column 3</h4>
            <p style="font-size:0.95rem;">Gap uses spacing Step {{DEFAULT_GAP}} configured in the sidebar.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    name: 'Buttons Palette',
    slug: 'buttons-palette',
    category: 'components',
    description: 'Buttons for each editable color token using custom radius and shadow.',
    html: `
      <div style="padding:16px; border-radius:18px; box-shadow: var(--custom--shadow); background-color: var(--wp--preset--color--light);">
        <p style="font-weight:600;">Buttons</p>
        <div style="margin-top:12px; display:flex; flex-wrap:wrap; gap:12px;">
          {{BUTTONS}}
        </div>
      </div>
    `
  },
  {
    name: 'Token Cards',
    slug: 'token-cards',
    category: 'components',
    description: 'Simple cards showing border and shadow tokens.',
    html: `
      <div style="padding:16px; border-radius:18px; box-shadow: var(--custom--shadow); background-color: var(--wp--preset--color--light);">
        <p style="font-weight:600;">Cards</p>
        <div style="margin-top:12px; display:grid; gap:16px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
          <div class="has-light-background-color" style="padding:16px; border-radius: var(--custom--radius); border-width: var(--custom--border-width); border-style: var(--custom--border-style); border-color: var(--wp--preset--color--light); box-shadow: var(--custom--shadow);">
            <p style="font-size:0.95rem;">Card 1</p>
            <h4 style="font-size:1.1rem; font-weight:600;">Design Tokens</h4>
            <p style="margin-top:4px; font-size:0.95rem;">Borders and shadows mirror your custom tokens.</p>
          </div>
          <div class="has-light-background-color" style="padding:16px; border-radius: var(--custom--radius); border-width: var(--custom--border-width); border-style: var(--custom--border-style); border-color: var(--wp--preset--color--light); box-shadow: var(--custom--shadow);">
            <p style="font-size:0.95rem;">Card 2</p>
            <h4 style="font-size:1.1rem; font-weight:600;">Design Tokens</h4>
            <p style="margin-top:4px; font-size:0.95rem;">Borders and shadows mirror your custom tokens.</p>
          </div>
          <div class="has-light-background-color" style="padding:16px; border-radius: var(--custom--radius); border-width: var(--custom--border-width); border-style: var(--custom--border-style); border-color: var(--wp--preset--color--light); box-shadow: var(--custom--shadow);">
            <p style="font-size:0.95rem;">Card 3</p>
            <h4 style="font-size:1.1rem; font-weight:600;">Design Tokens</h4>
            <p style="margin-top:4px; font-size:0.95rem;">Borders and shadows mirror your custom tokens.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    name: 'Pricing Pods',
    slug: 'pricing-pods',
    category: 'components',
    description: 'A list of various different prices and the features that come with it.',
    html: `
      <div class="alignfull ccc-pricing-pods" style="--pricing-columns: 3;">
        <div class="ccc-pricing-pods__card">
          <h3>Starter</h3>
          <p class="ccc-pricing-pods__description">Essential tools to get moving fast.</p>
          <p class="ccc-pricing-pods__price">$19/mo</p>
          <div class="wp-block-buttons">
            <div class="wp-block-button">
              <a class="wp-block-button__link has-primary-background-color">Choose Starter</a>
            </div>
          </div>
          <ul class="ccc-pricing-pods__features">
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Unlimited projects</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Basic analytics</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Email support</li>
            <li><i class="fa-regular fa-minus-square"></i> Team seats (up to 3)</li>
            <li><i class="fa-regular fa-minus-square"></i> Custom domains</li>
            <li><i class="fa-regular fa-minus-square"></i> SSO</li>
            <li><i class="fa-regular fa-minus-square"></i> Billing portal</li>
            <li><i class="fa-regular fa-minus-square"></i> Feature flags</li>
            <li><i class="fa-regular fa-minus-square"></i> API access</li>
            <li><i class="fa-regular fa-minus-square"></i> Audit logs</li>
          </ul>
        </div>

        <div class="ccc-pricing-pods__card">
          <h3>Growth</h3>
          <p class="ccc-pricing-pods__description">Advanced controls for growing teams.</p>
          <p class="ccc-pricing-pods__price">$49/mo</p>
          <div class="wp-block-buttons">
            <div class="wp-block-button">
              <a class="wp-block-button__link has-primary-background-color">Choose Growth</a>
            </div>
          </div>
          <ul class="ccc-pricing-pods__features">
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Unlimited projects</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Advanced analytics</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Priority support</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Team seats (up to 10)</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Custom domains</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> SSO</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Billing portal</li>
            <li><i class="fa-regular fa-minus-square"></i> Feature flags</li>
            <li><i class="fa-regular fa-minus-square"></i> API access</li>
            <li><i class="fa-regular fa-minus-square"></i> Audit logs</li>
          </ul>
        </div>

        <div class="ccc-pricing-pods__card">
          <h3>Scale</h3>
          <p class="ccc-pricing-pods__description">Everything you need for enterprise scale.</p>
          <p class="ccc-pricing-pods__price">$99/mo</p>
          <div class="wp-block-buttons">
            <div class="wp-block-button">
              <a class="wp-block-button__link has-primary-background-color">Choose Scale</a>
            </div>
          </div>
          <ul class="ccc-pricing-pods__features">
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Unlimited projects</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Advanced analytics</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Priority support</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Unlimited team seats</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Custom domains</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> SSO</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Billing portal</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Feature flags</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> API access</li>
            <li class="is-active"><i class="fa-regular fa-square-check"></i> Audit logs</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    name: 'Thin CTA',
    slug: 'thin-cta',
    category: 'components',
    description: 'A simple, one-line CTA with a button.',
    html: `
      <div class="ccc-thin-cta has-primary-background-color">
        <p class="has-large-font-size">Ready to ship your next release?</p>
        <div class="wp-block-buttons">
          <div class="wp-block-button">
            <a class="wp-block-button__link has-secondary-background-color">Start a Project</a>
          </div>
        </div>
      </div>
    `
  },
  {
    name: 'Medium CTA',
    slug: 'medium-cta',
    category: 'components',
    description: 'A larger CTA section that allows for more text and an image.',
    html: `
      <div class="ccc-medium-cta has-light-alt-background-color">
        <div class="ccc-medium-cta__content">
          <h2>Launch boldly with a partner who ships fast.</h2>
          <p>
            We help teams move from idea to production without the busywork. Collaborate with our design ops crew, ship high-quality interfaces, and keep every stakeholder aligned. From theme setup to component libraries, we make sure nothing slips through the cracks. Ready when you are.
          </p>
          <div class="wp-block-buttons">
            <div class="wp-block-button">
              <a class="wp-block-button__link has-secondary-background-color">Plan a kickoff</a>
            </div>
          </div>
        </div>
        <div class="ccc-medium-cta__image">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" alt="People collaborating at a coffee shop" />
        </div>
      </div>
    `
  },
  {
    name: 'Large CTA',
    slug: 'large-cta',
    category: 'components',
    description: 'A very large CTA',
    html: `
      <div class="ccc-large-CTA alignwide has-secondary-background-color">
        <div class="ccc-large-CTA__content">
          <h2>Build boldly, launch faster.</h2>
          <p>
            Bring your next release to life with a fully tokenized design system and frictionless workflows. Collaborate in real time, export instantly, and keep every stakeholder aligned from kickoff to launch.
          </p>
          <div class="wp-block-buttons">
            <div class="wp-block-button">
              <a class="wp-block-button__link has-primary-background-color">Get started today</a>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: 'Testimonial Big Grid',
    slug: 'testimonial-big-grid',
    category: 'components',
    description: 'Large full-width testimonial grid showcasing multiple quotes with a featured centerpiece.',
    html: `
      <div class="alignfull ccc-testimonial-big-grid">
        <article class="ccc-testimonial-big-grid__single">
          <p>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam <strong><em>delectus nihil</em></strong>. Aut enim doloremque et ipsam.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=1" alt="Leslie Alexander headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Leslie Alexander</p>
              <p class="ccc-testimonial-big-grid__handle">Northwind Labs</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis <em><strong>blandit vel</strong></em> et proin. Non hendrerit in vel ac diam.”</p>
          <div class="ccc-testimonial-big-grid__meta is-featured-meta">
            <div class="ccc-testimonial-big-grid__person">
              <img src="https://i.pravatar.cc/64?img=2" alt="Brenna Goyette headshot">
              <div>
                <p class="ccc-testimonial-big-grid__name">Brenna Goyette</p>
                <p class="ccc-testimonial-big-grid__handle">SavvyCal</p>
              </div>
            </div>
            <div class="ccc-testimonial-big-grid__company">SavvyCal</div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi <strong><em>rerum voluptatem</em></strong> minus harum.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=3" alt="Leonard Krasner headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Leonard Krasner</p>
              <p class="ccc-testimonial-big-grid__handle">Cascade Health</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat <em><strong>cupiditate omnis</strong></em>.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=4" alt="Michael Foster headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Michael Foster</p>
              <p class="ccc-testimonial-big-grid__handle">Foster & Co.</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Voluptas quo itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae <strong><em>ipsum perferendis</em></strong> recusandae saepe corrupti.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=5" alt="Tom Cook headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Tom Cook</p>
              <p class="ccc-testimonial-big-grid__handle">Opentech</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Itaque <em><strong>error ut</strong></em> et.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=6" alt="Floyd Miles headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Floyd Miles</p>
              <p class="ccc-testimonial-big-grid__handle">Brightline</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit <strong><em>laborum autem</em></strong> inventore ut voluptate.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=7" alt="Dries Vincent headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Dries Vincent</p>
              <p class="ccc-testimonial-big-grid__handle">Vincent Studio</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis <em><strong>deleniti vitae</strong></em> ut in earum delectus iusto.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=8" alt="Courtney Henry headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Courtney Henry</p>
              <p class="ccc-testimonial-big-grid__handle">Lighthouse</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et <strong><em>voluptatem et</em></strong>. Nostrum explicabo iste unde beatae.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=9" alt="Emily Selman headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Emily Selman</p>
              <p class="ccc-testimonial-big-grid__handle">Selman Digital</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Voluptas quo itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim <em><strong>molestiae ipsum</strong></em> perferendis recusandae saepe corrupti.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=10" alt="Whitney Francis headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Whitney Francis</p>
              <p class="ccc-testimonial-big-grid__handle">Francis Ventures</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Quibusdam culpa sit explicabo numquam. Recusandae veniam repellat omnis animi fugiat illum nesciunt sed quisquam <strong><em>voluptatem facilis</em></strong> illo.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=11" alt="Allan Richards headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Allan Richards</p>
              <p class="ccc-testimonial-big-grid__handle">Riverbank Media</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Earum dicta nulla mollitia at quae voluptates nam dolorum, ratione expedita. Placeat soluta ipsum <em><strong>eaque tenetur</strong></em> dignissimos?”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=12" alt="Mara Patel headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Mara Patel</p>
              <p class="ccc-testimonial-big-grid__handle">Skylight</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Excepturi deserunt eveniet eligendi quaerat nemo quos, assumenda in aut magni facere voluptas. Ratione debitis omnis <strong><em>tempora commodi</em></strong>.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=13" alt="Gabriel Kim headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Gabriel Kim</p>
              <p class="ccc-testimonial-big-grid__handle">Pixelwind</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“In eaque illum dolores iure quae aliquid deleniti blanditiis nostrum, minus, accusantium laborum. Nemo aut <em><strong>natus a</strong></em> architecto dicta commodi.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=14" alt="Priya Nair headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Priya Nair</p>
              <p class="ccc-testimonial-big-grid__handle">Nimbus HR</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Accusamus odio aliquid repellat cumque pariatur maiores nesciunt eveniet eos. Eaque quos earum sint ad <strong><em>veritatis dolore</em></strong> asperiores fuga.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=15" alt="Diego Santos headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Diego Santos</p>
              <p class="ccc-testimonial-big-grid__handle">Aurora Labs</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Minima voluptatem illum tenetur beatae perspiciatis enim cum repudiandae itaque molestiae aspernatur porro sequi neque <em><strong>fugit delectus</strong></em>.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=16" alt="Sarah Boyd headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Sarah Boyd</p>
              <p class="ccc-testimonial-big-grid__handle">Boyd Studio</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Adipisci saepe laborum deserunt consequuntur perspiciatis eos, aspernatur eaque non aliquid? Praesentium, repellendus. Perspiciatis qui id expedita dicta eaque laudantium reiciendis, quaerat cumque veritatis consequuntur necessitatibus repellat asperiores. Magnam molestiae, sed libero explicabo <strong><em>excepturi omnis</em></strong> optio eligendi laboriosam incidunt.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=17" alt="Marianne Blake headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Marianne Blake</p>
              <p class="ccc-testimonial-big-grid__handle">Acme Systems</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Dignissimos harum, eius earum necessitatibus numquam adipisci. Vitae impedit molestias doloremque commodi consequuntur <em><strong>repellat quaerat</strong></em> dolore ipsam.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=18" alt="Jason Wu headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Jason Wu</p>
              <p class="ccc-testimonial-big-grid__handle">Fluxline</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Aut necessitatibus libero cupiditate doloremque molestiae ipsa, nulla perspiciatis voluptates recusandae. Et cumque vero eum <strong><em>eveniet suscipit</em></strong>.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=19" alt="Alisha Lee headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Alisha Lee</p>
              <p class="ccc-testimonial-big-grid__handle">Beacon</p>
            </div>
          </div>
        </article>

        <article class="ccc-testimonial-big-grid__single">
          <p>“Dolorum voluptatum unde cum error quisquam nihil at aliquam eius similique. Delectus illum dicta quae explicabo <em><strong>exercitationem molestias</strong></em> culpa.”</p>
          <div class="ccc-testimonial-big-grid__meta">
            <img src="https://i.pravatar.cc/64?img=20" alt="Noah Bennett headshot">
            <div>
              <p class="ccc-testimonial-big-grid__name">Noah Bennett</p>
              <p class="ccc-testimonial-big-grid__handle">Bennett Group</p>
            </div>
          </div>
        </article>
      </div>
    `
  }
];
