export const header = {
    data() {
      return {
        user: {},
        parent: "",
        active: 0,
        menu: 0,
      };
    },
  
    mounted() {
      this.parent = this.$parent.$parent.$parent;
    },
  
    methods: {

    },
  
    template: `
      <header class="header">
        <so-ref="msg"></so-ref>
      </header>
    `
  };