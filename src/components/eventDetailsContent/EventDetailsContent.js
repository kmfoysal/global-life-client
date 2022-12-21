import React from 'react';

const EventDetailsContent = ({ singleDetails }) => {

  const textEditorString = [];

  const arraytitle = singleDetails?.desc.match(/<h(.)>.*?<\/h\1>/g);

  const para = singleDetails?.desc.match(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/g);

//   const arrayList = str.match(/<\s*li[^>]*>([^<]*)<\s*\/\s*li\s*>/g);
    
    textEditorString.push(arraytitle, para)

    console.log(textEditorString);
    
  return (
    <div class="blog-content-wrapper">
      <div class="row inner-wrapper border-bottom py-4">
        <div class="col-lg-3 blog-details-title">
          <h3 class="fs-4 fw-bold text-dark1">About this event</h3>
        </div>
        <div class="col-lg-9 blog-details-pra">
          <p class="fs-6 lh-26 text-dark2 ff-inter mb-4">
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
            Proin porta est convallis lacus blandit pretium sed non enim.
            Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum
            ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor
            ac enim. In hac habitasse platea dictumst.
          </p>
          <p class="fs-6 lh-26 text-dark2 ff-inter mb-4">
            Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.
            Sed tellus augue, hendrerit eu rutrum in, porttitor at metus. Mauris
            ac hendrerit metus. Phasellus mattis lectus commodo felis egestas,
            id accumsan justo ultrices. Phasellus aliquet, sem a placerat
            dapibus, enim purus dictum lacus, nec ultrices ante dui ac ante.
          </p>
          <p class="fs-6 lh-26 text-dark2 ff-inter mb-4">
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
            Proin porta est convallis lacus blandit pretium sed non enim.
            Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum
            ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor
            ac enim. In hac habitasse platea dictumst.
          </p>
          <p class="fs-6 lh-26 text-dark2 ff-inter mb-0">
            Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.
            Sed tellus augue, hendrerit eu rutrum in, porttitor at metus. Mauris
            ac hendrerit metus. Phasellus mattis lectus commodo felis egestas,
            id accumsan justo ultrices. Phasellus aliquet, sem a placerat
            dapibus, enim purus dictum lacus, nec ultrices ante dui ac ante.
          </p>
        </div>
      </div>
      {/* <div class="inner-wrapper border-bottom d-flex gap-4 py-4">
        <div class="blog-details-title w-25">
          <h3 class="fs-4 fw-bold text-dark1">Speaker:</h3>
        </div>
        <div class="blog-details-pra w-75">
          <p class="fs-6 lh-26 text-dark2 ff-inter mb-0">
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
            Proin porta est convallis lacus blandit pretium sed non enim.
            Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum
            ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor
            ac enim. In hac habitasse platea dictumst. Sed cursus venenatis
            tellus, non lobortis diam volutpat sit amet. Sed tellus augue,
            hendrerit eu rutrum in, porttitor at metus. Mauris ac hendrerit
            metus. Phasellus mattis lectus commodo felis egestas, id accumsan
            justo ultrices.
          </p>
        </div>
      </div>
      <div class="inner-wrapper border-bottom border-2 d-flex gap-4 py-4">
        <div class="blog-details-title w-25">
          <h3 class="fs-4 fw-bold text-dark1 mb-4">
            Topic To Be <br class="d-none d-xl-inline" /> Covered:
          </h3>
        </div>
        <div class="w-75">
          <ul class="blog-inner-list ps-4">
            <li>
              <p class="fs-6 lh-26 text-dark2 ff-inter mb-2">
                Fringilla Fusce Elit{" "}
              </p>
            </li>
            <li>
              <p class="fs-6 lh-26 text-dark2 ff-inter mb-2">
                Parturient Venenatis Etiam
              </p>
            </li>
            <li>
              <p class="fs-6 lh-26 text-dark2 ff-inter mb-2">
                Tortor Nullam Fringilla
              </p>
            </li>
            <li>
              <p class="fs-6 lh-26 text-dark2 ff-inter mb-2">Ullamcorper</p>
            </li>
            <li>
              <p class="fs-6 lh-26 text-dark2 ff-inter mb-2">Malesuada Ipsum</p>
            </li>
            <li>
              <p class="fs-6 lh-26 text-dark2 ff-inter mb-2">Lorem Ornare</p>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default EventDetailsContent;