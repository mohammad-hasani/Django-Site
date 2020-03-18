import React, {Component} from 'react';

class Story extends Component {
    render() {
        return (
            <div className="w3-card-4 story-div card-background" id="story">
                <div className="w3-center w3-left w3-cell w3-cell-middle story-div-left-side">
                    <div className="story-div-left-side-icon">
                        <i className="w3-right w3-cell-middle fa fa-chevron-right right-search-btn"></i>
                    </div>
                    <div className="story-div-left-side-list">
                        <p>
                            <h3 className="w3-center"><b>Story</b></h3>
                        </p>
                        <div>
                            <form action="#">
                                <input className="w3-input w3-opacity w3-text-white input-transparent search-input"
                                       type="text"/>
                                    <button className="w3-btn w3-ripple search-input-button" id="btn-story-search"
                                            onClick="btn_story_search()">
                                        <i className="fa fa-search"></i>
                                    </button>
                            </form>
                        </div>
                        <div className="w3-padding story-div-left-side-story_list custom-scroll">
                            <ul className="w3-ul">
                                <li className="item">Lorem ipsum dolor.</li>
                                <li className="item">Dolores perferendis, praesentium?</li>
                                <li className="item">Aliquam asperiores, nobis!</li>
                                <li className="item">Dolorem, eaque, quisquam!</li>
                                <li className="item">Cumque, sequi, ullam?</li>
                                <li className="item">Deserunt, fugiat odit!</li>
                                <li className="item">Accusamus, ea, perferendis.</li>
                                <li className="item">Quod similique, voluptates?</li>
                                <li className="item">Officia, quos, sapiente?</li>
                                <li className="item">Aut dolor, sed.</li>
                                <li className="item">Aliquid, assumenda, eius?</li>
                                <li className="item">Ducimus, veniam, voluptate?</li>
                                <li className="item">Debitis, illo reiciendis.</li>
                                <li className="item">Earum magnam, minima.</li>
                                <li className="item">Ipsam minima, voluptatibus.</li>
                                <li className="item">Blanditiis, laboriosam suscipit?</li>
                                <li className="item">Aliquam esse, quibusdam!</li>
                                <li className="item">Dolorem quisquam, sint!</li>
                                <li className="item">Fugiat, minus reiciendis!</li>
                                <li className="item">A labore, odio!</li>
                                <li className="item">Eius, nihil, sint!</li>
                                <li className="item">Assumenda autem, ea?</li>
                                <li className="item">Excepturi, laborum reprehenderit?</li>
                                <li className="item">Nemo, tenetur voluptatibus!</li>
                                <li className="item">Nesciunt, praesentium sit!</li>
                                <li className="item">Deserunt, dolorem harum?</li>
                                <li className="item">Aliquid, illum, porro?</li>
                                <li className="item">Ipsum maiores, nam?</li>
                                <li className="item">Non, reprehenderit, voluptas!</li>
                                <li className="item">Nesciunt nobis, numquam?</li>
                                <li className="item">Dolore, provident, voluptatibus.</li>
                                <li className="item">Dolore, nulla, ullam?</li>
                                <li className="item">Delectus, minima tenetur?</li>
                                <li className="item">Amet, doloremque iste?</li>
                                <li className="item">Est incidunt, recusandae.</li>
                                <li className="item">Magni obcaecati, voluptatibus.</li>
                                <li className="item">Illum placeat, rem.</li>
                                <li className="item">Consequuntur placeat, sint!</li>
                                <li className="item">Nesciunt, obcaecati, tempore?</li>
                                <li className="item">Ab, quam, ratione.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="w3-card-4 w3-right w3-cell w3-padding w3-cell-middle story-div-right-side custom-scroll">
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi dolorem ex explicabo fugit illo in ipsam laudantium maxime, pariatur saepe sed, soluta suscipit unde vero! Asperiores autem dolore recusandae?</span><span>Accusamus ad adipisci alias aspernatur autem blanditiis cum doloribus dolorum, eveniet fugit harum incidunt mollitia natus non nostrum sequi similique, tempore velit! Ab atque corporis earum eveniet illo magni necessitatibus!</span><span>Accusantium consequuntur doloremque temporibus. A, amet asperiores, corporis dolore dolorum facilis fugit id, ipsam iste maiores modi necessitatibus nisi nostrum odio officiis porro quia reprehenderit rerum saepe suscipit ullam veniam.</span><span>Ad aliquam aut corporis dolore doloribus enim eos explicabo harum hic iste nobis numquam obcaecati, odit omnis porro ratione repudiandae sapiente! Blanditiis consequuntur expedita molestias nam officiis qui voluptatibus? Consequatur!</span><span>Adipisci aliquam corporis cupiditate dignissimos dolorem doloremque ducimus earum eligendi error esse ex in ipsam libero magni maxime minima, modi molestiae nulla quas repellendus reprehenderit saepe temporibus velit veritatis voluptas.</span><span>Amet beatae cupiditate eius fugiat impedit iusto, neque obcaecati quae reprehenderit saepe, veniam voluptatibus. Asperiores autem, debitis est excepturi explicabo fuga illum obcaecati quam quos rerum saepe, sed, ullam voluptate?</span><span>Autem corporis distinctio, dolor dolore dolores ducimus eos esse harum incidunt ipsam itaque laboriosam modi natus necessitatibus, nulla placeat praesentium quae quaerat quam quidem ratione repudiandae tempora vel voluptas, voluptatibus?</span><span>Atque aut delectus eveniet fugit id illum nisi officiis veritatis? A animi aperiam commodi est impedit magnam nulla quia repellendus vitae voluptatum? Adipisci assumenda debitis dignissimos eligendi, nemo perspiciatis sint?</span><span>Atque cupiditate debitis et facilis inventore libero minima necessitatibus nisi pariatur possimus, reiciendis similique, sit tenetur. Debitis deleniti deserunt esse expedita, facilis modi nemo quibusdam quidem quos recusandae ut voluptatum.</span><span>Eos, odio optio. Ad commodi dolor dolore, ducimus, earum esse eveniet ex exercitationem harum hic inventore labore maxime nihil odit omnis, perferendis possimus praesentium quia rerum similique tenetur ut voluptatum!</span><span>Autem dolorum hic ipsa molestiae nam perferendis ratione similique, tempora? Consectetur debitis ea, fugit ipsam libero optio perspiciatis porro, saepe sequi similique temporibus unde, vel veritatis. Molestiae nisi porro soluta.</span><span>Aliquid assumenda exercitationem itaque, molestiae non odit officia quam quis quo rem sequi tempore ullam voluptatum! Ipsam iusto soluta voluptate. Commodi eaque fugit molestias nisi praesentium quae saepe vitae voluptas?</span><span>Consequuntur culpa dolorem perspiciatis quod temporibus? Asperiores autem in laboriosam laborum nisi numquam optio porro quod veniam voluptatibus. Aperiam doloremque incidunt, laboriosam nesciunt non nostrum obcaecati quis quisquam sapiente sed.</span><span>Architecto cum eveniet molestiae perferendis suscipit? Amet consectetur consequuntur delectus deleniti eos error et ex in, iure necessitatibus obcaecati perferendis placeat quam quasi recusandae, reiciendis sequi temporibus veritatis vitae, voluptates.</span><span>Consequatur dignissimos dolore ea eum expedita, impedit, maiores natus porro quae quod repellendus reprehenderit repudiandae, temporibus voluptate voluptatibus! Amet at deserunt ea earum enim esse excepturi facere itaque labore voluptate!</span><span>Animi deserunt fuga, nulla optio quis repellendus sapiente voluptates voluptatibus. Aliquid aut blanditiis cumque dignissimos doloremque esse excepturi fuga, fugit laborum nemo nesciunt obcaecati ratione rerum veniam vero voluptate voluptates.</span><span>Accusamus animi dicta dolores earum eius eos minima nemo porro quam quibusdam. Accusantium alias beatae debitis dolorem eaque est iure laboriosam porro quaerat, quasi quisquam quo suscipit tempore unde voluptatibus?</span><span>Consequatur corporis expedita illum tenetur. Fugiat magnam natus tempora. Ab architecto, blanditiis cum esse excepturi expedita explicabo necessitatibus nobis pariatur quas, quasi qui quos rem repellat sed tempora vel voluptate!</span><span>Accusantium aperiam atque corporis cumque debitis dolore dolores, esse facilis in inventore labore laborum libero magni nisi non porro quaerat, quibusdam quod reiciendis rerum saepe tempore veritatis voluptas voluptates voluptatibus.</span><span>Animi aperiam commodi corporis culpa dolore eaque enim est eveniet, excepturi explicabo in inventore ipsam ipsum iste libero molestiae neque numquam officiis porro possimus quam quas quis sed sequi voluptates.</span><span>Beatae, maiores, perspiciatis! Assumenda autem commodi consequatur culpa eos maxime minima, mollitia natus nisi provident qui repellat, ut veniam, voluptatibus voluptatum. Accusantium ea iste iure provident repellendus reprehenderit sed sequi?</span><span>Aperiam architecto assumenda blanditiis cumque cupiditate deserunt dolorem ducimus eaque eligendi, eos ex id impedit in laborum laudantium nam nesciunt numquam odit officiis quaerat quos rem repellendus similique suscipit tempore?</span><span>Aliquam debitis doloremque mollitia pariatur, ut vel veritatis vero voluptatum. Eius exercitationem fugiat illum rerum sunt tempore, temporibus? Ab architecto distinctio dolorem dolores eligendi, explicabo similique. Earum ex quae velit!</span><span>Dicta dolorum eos error et facere numquam possimus quas voluptas! Earum fugiat incidunt, nisi nostrum quisquam rem sequi. Asperiores culpa incidunt minima nam, necessitatibus non praesentium saepe voluptas voluptate voluptates.</span><span>Aspernatur eaque esse laborum minima, obcaecati repudiandae veritatis voluptate! Animi aperiam at consequuntur laborum quas! Alias consequuntur, dolorem eveniet facere in laboriosam minima, modi quidem repellendus tempore totam ullam vero.</span><span>Consequuntur distinctio dolores eaque fugiat harum, id labore laudantium libero nam nisi nostrum perspiciatis quaerat sapiente soluta voluptatibus? Ad dignissimos labore laudantium, maiores maxime modi porro quae vel. Consequuntur, debitis.</span><span>Ad animi aperiam commodi dignissimos dolor dolores doloribus eaque eos error et hic iure iusto laboriosam nam nemo, nulla possimus, quis quo quod, repellat sequi tempora totam ullam veritatis voluptatum.</span><span>Ab autem eos illum nulla obcaecati quaerat quisquam sapiente. Autem blanditiis expedita facilis illum minima, nisi nulla provident quia reprehenderit sint. Asperiores distinctio eveniet in iste, laborum minus perspiciatis quo?</span><span>Architecto doloribus, eos ex laboriosam libero modi molestias nam quibusdam quidem quisquam similique tempore voluptatum. Deserunt enim fugiat iste molestias possimus. Ad aperiam commodi consectetur earum et labore, ullam voluptatum?</span><span>Aut consequatur libero nobis numquam porro quas, quibusdam? Blanditiis dolorum eius impedit iusto maiores mollitia neque numquam officia, quam qui sed suscipit ullam velit. Facere illum optio quae quaerat totam.</span><span>A accusamus aliquid asperiores cum debitis est et facere illo in, laudantium neque quae quam rerum sint totam ut, vitae! A aperiam eaque maiores minus odit quas voluptatum? Amet, dicta.</span><span>Corporis deleniti dolores illum mollitia natus praesentium quidem repellat sed sit tempore. Cum, enim hic nemo nihil non perspiciatis provident. Beatae cupiditate ducimus earum ipsam magni omnis pariatur sunt suscipit.</span><span>A assumenda earum eos expedita fugiat fugit harum laudantium libero magnam minus modi, natus nesciunt officia perspiciatis placeat quas quisquam reiciendis rem sapiente sequi sit sunt vel, velit veritatis voluptatibus!</span><span>Aliquam eligendi eos et facilis modi numquam voluptatem? Alias, at consectetur deleniti dicta ex necessitatibus nisi perferendis repellat. Aperiam assumenda cupiditate, expedita harum mollitia odit porro quos sequi similique voluptatibus!</span><span>Aliquam aspernatur dolores eaque eos in magnam sit? Ab accusamus amet asperiores corporis doloremque eum ex exercitationem fugiat laborum nisi non nostrum officiis sapiente sit temporibus vitae, voluptas voluptatem! Quis.</span><span>Ab adipisci aut cupiditate delectus dolore earum eligendi facilis fugiat, fugit illum incidunt ipsum magnam nemo nihil nisi nobis odio perspiciatis placeat possimus provident quaerat quis recusandae unde velit vitae?</span><span>Adipisci alias aliquam aliquid aperiam, beatae cum dignissimos facilis fugiat harum illo in ipsam iste maiores minus molestias nemo nesciunt non obcaecati odio odit quaerat reiciendis sapiente sit soluta, sunt.</span><span>Aut cupiditate doloremque dolores eaque eligendi eos esse in ipsa ipsam magnam nam natus nesciunt nihil numquam perferendis, quam quas quasi qui quod quos repudiandae soluta vel voluptatem. Omnis, quisquam?</span><span>A adipisci asperiores aspernatur at autem commodi distinctio, dolorum, enim expedita hic iste iusto libero maiores molestias nemo numquam omnis quae quod rem rerum sapiente soluta ullam vel velit veniam?</span><span>A accusantium aspernatur consectetur cum dolor, dolore eius enim labore laborum maiores molestias nobis quaerat quam reprehenderit rerum sapiente similique, sint sit temporibus tenetur totam vero voluptas. Cumque eius, labore.</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Story