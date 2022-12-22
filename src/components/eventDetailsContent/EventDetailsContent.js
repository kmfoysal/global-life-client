import React from "react";

const EventDetailsContent = ({ singleDetails }) => {
  
    const textEditorString = [];

    const arraytitle = singleDetails?.desc.match(/<h(.)>.*?<\/h\1>/g);

    const para = singleDetails?.desc.match(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/g);

    //   const arrayList = str.match(/<\s*li[^>]*>([^<]*)<\s*\/\s*li\s*>/g);

    // textEditorString.push(
    //     { arraytitle: arraytitle?.[0], para: para?.[0] },
    //     { arraytitle: arraytitle?.[1], para: para?.[1] },
    //     { arraytitle: arraytitle?.[2], para: para?.[2] },
    //     { arraytitle: arraytitle?.[3], para: para?.[3] },
    //     { arraytitle: arraytitle?.[4], para: para?.[4] },
    //     { arraytitle: arraytitle?.[5], para: para?.[5] }
    // );

    for (let i = 0; i < arraytitle?.length && para?.length; i++) {
        textEditorString.push({ arraytitle: arraytitle?.[i], para: para?.[i] });
    }


    console.log(textEditorString);

    return (
        <div class="blog-content-wrapper">
            {textEditorString?.map((str) => (
                <div class="row inner-wrapper border-bottom py-4" key={str?.arraytitle}>
                    <div class="col-lg-3 blog-details-title">
                        <h3 class="fs-4 fw-bold text-dark1">{str?.arraytitle?.replace(/(<([^>]+)>)/gi, "")}</h3>
                    </div>
                    <div class="col-lg-9 blog-details-pra">
                        <p class="fs-6 lh-26 text-dark2 ff-inter mb-0">{str?.para?.replace(/(<([^>]+)>)/gi, "")}</p>
                    </div>
                </div>
            ))}

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
