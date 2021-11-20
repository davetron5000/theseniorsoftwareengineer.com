import React from "react";
import Layout from "../components/Layout";

export default function(props) {
  return(
    <Layout>
      <a name="top">&nbsp;</a>
      <section className="content">
      <div className="sect1">
      <h2 id="_deal_with_technical_debt_and_slop">Deal With Technical Debt and Slop</h2>
      <div className="sectionbody">
      <div className="paragraph"><p>At this point, you have a process to handle most programming tasks
      you&#8217;d be given on an average day.  From bug-fixing, to small features, to
      larger features, you should be able to deliver results quickly and easily.</p></div>
      <div className="paragraph"><p>Despite your best efforts, code can begin to <em>rot</em> and become &#8220;crufty&#8221;.  Over time,
      the design of certain parts of our application will begin to hinder our
      ability to change it.  Many developers call code like this <em>technical debt</em>.  The reality is that sometimes sloppy code is just sloppy
      and could&#8217;ve been easily avoided.  I call this <em>slop</em>, and this chapter is about
      understanding the difference.</p></div>
      <div className="sect2">
      <h3 id="_slop_code_to_fix_now">Slop: Code to Fix Now</h3>
      <div className="paragraph"><p>You&#8217;re under the gun to deliver a feature quickly and you&#8217;ve just
      gotten your acceptance-level test to pass. Your code has unit test
      coverage and you feel confident that the system works. But, to do so,
      you had to copy and paste a lot of business logic, your variable names
      aren&#8217;t very good, and you&#8217;ve created a few new public APIs that are poorly
      documented and counter-intuitive.  Should you ship this code?</p></div>
      <div className="paragraph"><p>No.</p></div>
      <div className="paragraph"><p>The reason is that you can fix these problems before the code has a chance
      to infect the rest of the system.  All of these issues are not only fixable, but <em>quickly</em> fixable.
      Removing copy and paste code, renaming variables, and documenting APIs is
      straightforward, and can often be done in less time than it takes to
      discuss whether or not you should even do them! Depending on your language
      and toolchain, you could fix some of these issues with the click of a button.</p></div>
      <div className="paragraph"><p>Code that has these sorts of issues is called <em>slop</em> because it&#8217;s sloppy and
      can be fixed quickly.  Slop is also indicated by poor test coverage, missing error handling, inconsistent
      use of logging, or a lack of validation of assumptions.  Slop exists mainly because
      you didn&#8217;t spend enough time refactoring.  Slop is complexity that <em>you&#8217;ve</em> introduced
      and that you can easily fix.</p></div>
      <div className="paragraph"><p>Don&#8217;t feel too bad about it. The process of writing software is a human
      one and no developer can churn out perfectly clean code every time.  The entire
      reason we separate refactoring into its own step is to allow us to focus
      on issues just like these.  So when you see slop, take a few minutes to clean it up.</p></div>
      <div className="paragraph"><p>Let&#8217;s look at an example.</p></div>
      <div className="paragraph"><p>Suppose we have a <span className="monospaced">Customer</span> class, a <span className="monospaced">Product</span> class, and an <span className="monospaced">Order</span> class.
      Each of these represents analogous domain objects: A customer purchases a
      product, creating an order representing that purchase.</p></div>
      <div className="paragraph"><p>Suppose that the
      system&#8217;s <span className="monospaced">Order</span> class has a method that can determine if the customer
      should be able to purchase a particular <span className="monospaced">Product</span> for free, based on the customer&#8217;s
      existing store credit, other discounts, and the price of the product.  That code
      looks like so (if you aren&#8217;t familiar with Ruby, see appendix in the book for a <em>very</em> brief overview
      of how to read Ruby code):</p></div>
      <div className="listingblock">
      <div className="content"><pre><code className='ruby'>{`class Product
  def price
    @price
  end
end

class Order

  # ...

  def free?
    (self.customer.store_credit +
     self.discounts_applied) >= self.product.price
  end

end`}
      </code></pre></div></div>
      <div className="paragraph"><p>The method <span className="monospaced">free?</span> returns a boolean based on comparing the sum of
      the order&#8217;s customer&#8217;s <span className="monospaced">store_credit</span> and the order&#8217;s discounts against
      the price of the order&#8217;s product.  This is the current state of the system.</p></div>
      <div className="paragraph"><p>You now need to implement a new feature where the customer is shown
      that a product they might purchase would be free, based
      on the store credit they have.  Further, the customer might have applied
      a discount code during the ordering process, so we want to take that
      into account as well.</p></div>
      <div className="paragraph"><p>Because the customer needs to see this information before a purchase
      is created, you can&#8217;t re-use the <span className="monospaced">free?</span> method on <span className="monospaced">Order</span> directly because
      there is no order yet.</p></div>
      <div className="paragraph"><p>After writing your tests, you get things working as quickly as you can
      which, in this case, means copying the code from <span className="monospaced">Order</span> and
      tweaking it slightly.</p></div>
      <div className="listingblock">
      <div className="content"><pre><code className='ruby'>{`class Product

  # ...

  def free_for_customer?(customer,code)
    discounts = 0
    if !code.nil?
      discounts = code.discount_amount
    end
    (customer.store_credit + discounts) >=
      self.price
  end
end`}
      </code></pre></div></div>
      <div className="paragraph"><p>The tests pass, and the feature technically works, but it&#8217;s less than ideal.  Not only
      have you copied code from somewhere else, you&#8217;ve modified it slightly so the duplicated
      business logic isn&#8217;t apparent. Anyone creating
      future features related to discounting and store credit will have to change
      both of these blocks of code, assuming they realize that both duplicate the same
      business logic. Further, the variable <span className="monospaced">code</span> is not very
      well-named.  It should be <span className="monospaced">discount_code</span>, but you were in a hurry.</p></div>
      <div className="paragraph"><p>Many developers, if they are feeling pressured to complete their work, would call this
      an acceptable compromise, promise to fix it later, and ship it.
      This code is slop and, as a senior developer, you shouldn&#8217;t ship it.
      You only need a few minutes to clean it up, which will save much more time than
      that down the road.</p></div>
      <div className="paragraph"><p>All you need
      to do is extract a method to encapsulate the discounting logic somewhere
      accessible to both <span className="monospaced">Product</span> and <span className="monospaced">Order</span>.  Since every <span className="monospaced">Order</span> has a <span className="monospaced">Product</span>,
      you can put this new method in <span className="monospaced">Product</span>.
      You call it <span className="monospaced">purchase_free?</span> and have it take the customer and any
      discounts that were applied.</p></div>
      <div className="listingblock">
      <div className="content"><pre><code className='ruby'>{`class Product
  def free_for_customer?(customer,discount_code)
    discounts = 0
    if !discount_code.nil?
      discounts = discount_code.discount_amount
    end

    purchase_free?(customer,discounts)
  end

  def purchase_free?(customer,discounts)
    (customer.store_credit + discounts) >=
      self.price
  end
end

class Order
  def free?
    self.product.purchase_free?(
      self.customer,
      self.discounts_applied)
  end
end`}
      </code></pre></div></div>
      <div className="paragraph"><p>The copy and paste code is now gone (as is the bad variable name) and it took <em>maybe</em> five minutes
      to fix.  There is now exactly one place where the
      logic related to discounting lives and no one would be confused by how it
      works. This code is clean, maintainable, and shippable. It is no longer slop.
      Since all of the tests are still passing, you can be sure that this change is a good one
      and didn&#8217;t break anything.</p></div>
      <div className="paragraph"><p>That being said, there are still some issues with this code.  Does discounting logic really belong
      in the <span className="monospaced">Product</span> class?  It&#8217;s a convenient place to put it, but it seems out of place.
      If a future feature needs to calculate a discount, but doesn&#8217;t have a <span className="monospaced">Product</span> instance, it&#8217;s going
      to be hard to re-use this logic.  Imaginary features like this can lead to over-engineering and
      the phrase &#8220;You Aren&#8217;t Gonna Need It&#8221; can keep your imagination in check.</p></div>
      <div className="paragraph"><p>Still, what if such a feature did come up?  It&#8217;s hard to argue that our code is now slop simply
      because of a new requirement.  The reality is that we made a design decision based on the state of the world at the time and, if world changes, our once clean code would make it difficult to change the system.  This is a form
      of <em>technical debt</em>.</p></div>
      </div>
      <div className="sect2">
      <h3 id="_technical_debt_code_to_fix_later_or_never">Technical Debt: Code to Fix Later (or Never)</h3>
      </div>
      </div>
      </div>
      <div className='sect1'>
        <a rel="nofollow" href="https://sowl.co/3cYah">Buy now to read more…</a>
      </div>
    </section>
    </Layout>
  )
};
