<template>
<button :style='style'>{{ text }} </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
  computed: {
    style() {
      const css = this.$store.getters.buttonStyle;
      return {
        borderRadius: `${css.borderRadius}px`,
        padding: `${css.paddingX}px ${css.paddingY}px`,
        width: `${css.width}px`,
        fontSize: `${css.fontSize}px`,
        border: `${css.borderWidth}px solid ${css.borderColor}`,
        fontWeight: css.fontWeight,
        color: css.color,
        backgroundColor: css.backgroundColor,
      };
    },
  },
};
</script>

