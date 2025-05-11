class TestimonialCard extends HTMLElement {
  static get observedAttributes() {
    return ["name", "handle", "content", "profile-image-url"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || "";
    const handle = this.getAttribute("handle") || "";
    const content = this.getAttribute("content") || "";
    const profileImageUrl = this.getAttribute("profile-image-url") || "";

    this.innerHTML = `
      <div
        class="flex flex-col gap-4 bg-white rounded-lg p-8 shadow-md w-[340px] box-border"
      >
        <div class="flex gap-4">
          <img
            class="object-center object-cover rounded-full size-[48px]"
            src="${profileImageUrl}"
            alt="Profile image"
          />
          <div class="flex flex-col">
            <div class="text-lg text-neutral-900" aria-label="User name">
              ${name}
            </div>
            <div class="text-sm text-neutral-600" aria-label="User handle">
              @${handle}
            </div>
          </div>
        </div>
        <div class="text-base text-neutral-600" aria-label="testimonial content">
          <p>
            ${content}
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define("testimonial-card", TestimonialCard);
