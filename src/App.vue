<template>
  <v-app app>
    <v-content>
      <template>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm12 md12 class="p-x-20vw">
              <v-card color="white" class="c-card" dark>
                  <div class="c-flex c-row">
                    <div class="c-column">
                      <label class="c-input-text">Text</label>
                      <input
                        class='c-input'
                        type="text"
                        name="text"
                        v-model="text1"
                        >
                    </div>
                  <Button :text='text1' />
                </div>
                  <div class="c-flex c-row">
                    <div class="c-column">
                      <label class="c-input-text">Text</label>
                      <input
                        class='c-input'
                        type="text"
                        name="text"
                        v-model="text2"
                        >
                    </div>
                  <Button :text='text2' />
                  </div>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm12 md12 class="p-x-20vw">
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="white" dark class="c-card">
                    <div class="card-header">
                        <h3> General Style </h3>
                    </div>
                      <div class="c-flex c-row">
                        <div class="c-column">
                          <label class="c-input-text">Border Radius</label>
                          <input
                          class='c-input'
                          type="number"
                          name="borderRadius"
                            @input='inputChange'
                        />
                        </div>
                        <div class="c-column">
                          <label class="c-input-text">paddingX</label>
                          <input
                            class='c-input'
                            type="number"
                            name="paddingX"
                            @input='inputChange'
                          />
                        </div>
                        <div class="c-column">
                          <label class="c-input-text">paddingY</label>
                          <input
                            class='c-input'
                            type="number"
                            name="paddingY"
                            @input='inputChange'
                          />
                        </div>
                        <div class="c-column">
                          <label class="c-input-text">Width</label>
                          <input
                            class='c-input'

                            type="number"
                            name="width"
                            @input='inputChange'
                          />
                        </div>
                        <div class="c-column">
                        <label class="c-input-text">Font Size</label>
                        <input
                          class='c-input'
                          type="number"
                          name="fontSize"
                            @input='inputChange'
                        />
                      </div>
                      <div class="c-column">
                        <label class="c-input-text">Border Width</label>
                        <input
                          class='c-input'
                          type="number"
                          name="borderWidth"
                            @input='inputChange'
                        />
                      </div>
                      <div class="c-column">
                        <label class="c-input-text">Font Weight</label>
                        <input
                          class='c-input'
                          type="number"
                          name="fontWeight"
                          step="100"
                          max="900"
                          @input='inputChange'
                        />
                      </div>
                        <div class="c-column">
                        <label class="c-input-text">Color</label>
                        <input
                          class='c-color-picker'
                          type="color"
                          name="color"
                          @input='inputChange'
                        />
                      </div>
                      <div class="c-column">
                        <label class="c-input-text">Background Color</label>
                        <input
                          class='c-color-picker'
                          type="color"
                          name="backgroundColor"
                          @input='inputChange'
                        />
                      </div>
                      <div class="c-column">
                        <label class="c-input-text">Border Color</label>
                        <input
                          class='c-color-picker'
                          type="color"
                          name="borderColor"
                          @input='inputChange'
                        />
                      </div>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
    </v-content>
  </v-app>
</template>

<script>
import { SET_BUTTON_CSS } from './store/constants';
import Button from './components/Button';

export default {
  name: 'App',
  data() {
    return {
      text1: 'text 1',
      text2: 'text 2',
    };
  },
  components: { Button },
  methods: {
    inputChange(e) {
      this.$store.commit(SET_BUTTON_CSS, {
        [e.target.name]: e.target.value,
      });
    },
  },
};
</script>

<style>
.c-flex {
  display: flex;
  justify-content: space-between;
}

.c-row {
  flex-wrap: wrap;
  padding-bottom: 16px;
}

.c-column {
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
}

.c-input-text {
  font-size: 12px;
  text-align: right;
  color: #656565 !important;
  padding-bottom: 5px;
}

.c-input {
  height: 32px;
  width: 150px;
  padding: 8px 12px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
}

.c-color-picker {
  text-align: right;
}

.c-card {
  padding: 24px;
  color: black !important;
}
.card-header {
  padding-bottom: 24px;
  text-align: right !important;
}
.center {
  text-align: center;
}
.p-x-20vw {
  margin: 5vh 30vw !important;
}
</style>
