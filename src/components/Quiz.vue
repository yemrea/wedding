<template>
  <!-- start quiz-section -->
  <section class="wpo-contact-section-s3 section-padding" id="quiz">
    <div class="container">
      <div class="wpo-section-title">
        <h4>{{ $t('title.HowMuchDoYouKnowUs') }}</h4>
        <h2>{{ $t('title.PlayAGame') }}</h2>
      </div>
      <div class="clearfix">
        <div class="card">
          <h5 class="card-header">Question: <span class="badge rounded-pill text-bg-warning">1</span></h5>
          <div class="card-body">
            <h5 class="card-title">About Bilgen</h5>
            <p class="card-text">Here is question text ?</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item btn btn-lg  btn-secondary btn-block text-start">
                <label class="btn-label" for="choice1"><i class="bi-chevron-right"> </i>Choice1 </label> 
                <input type="radio" name="choice" id="choice1" class="btn-check" value="1">
              </li>
              <li class="list-group-item btn btn-lg btn-secondary btn-block text-start">
                <label class="btn-label" for="choice1"><i class="bi-chevron-right"> </i>Choice2 </label> 
                <input type="radio" name="choice" id="choice2" class="btn-check" value="1">
              </li>
              <li class="list-group-item btn btn-lg btn-secondary btn-block text-start">
                <label class="btn-label" for="choice1"><i class="bi-chevron-right"> </i>Choice3 </label> 
                <input type="radio" name="choice" id="choice2" class="btn-check" value="1">
              </li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end quiz-section -->
</template>
