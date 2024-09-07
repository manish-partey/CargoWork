<template>
  <div class="container">
    <h1>Cargo Information Comparison</h1>

    <form @submit.prevent="compareObjects">
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Age:</th>
            <th>City:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!-- Textbox for Name -->
            <td>
              <input type="text" v-model="name" id="name" placeholder="Enter your name" />
            </td>

            <!-- Textbox for Age -->
            <td>
              <input type="text" v-model="age" id="age" placeholder="Enter your age" />
            </td>

            <!-- Textbox for Address (City) -->
            <td>
              <input type="text" v-model="city" id="address" placeholder="Enter your city" />
            </td>
          </tr>

          <tr>
            <!-- Submit button -->
            <td colspan="3" style="text-align: center;">
              <button type="submit">Compare</button>
            </td>
          </tr>

          <tr v-if="comparisonResult !== null">
            <!-- Label to display comparison result -->
            <td colspan="3" style="text-align: center;">
              <h2>Comparison Result:</h2>
              <p>{{ comparisonResult ? "Objects are identical" : "Objects differ" }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script src="@/assets/index.js"></script>

<style src="@/assets/style.css"></style>
