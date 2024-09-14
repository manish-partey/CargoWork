<template>
  <div class="container">
    <h1>JSON Comparison Tool</h1>

    <form @submit.prevent="compareJsons">
      <div class="input-container">
        <textarea v-model="jsonInput1" rows="10" placeholder="Enter first JSON"></textarea>
        <textarea v-model="jsonInput2" rows="10" placeholder="Enter second JSON"></textarea>
      </div>

      <button type="submit" class="submit-button">Compare JSONs</button>

      <div v-if="comparisonMessage !== null" class="result-container">
        <textarea v-model="comparisonMessage" rows="10" readonly></textarea>
      </div>
    </form>
  </div>
</template>

<script src="@/assets/index.js"></script>

<style src="@/assets/style.css"></style>
