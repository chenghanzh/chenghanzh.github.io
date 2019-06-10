---
layout: csPost
title:  "Support Vector Machine"
subtitle: ""
categories: [cs]
classification: [cs-ml]
tag: [cs-ml-cs229]
identifier:
  - Notation
  - Functional_and_geometric_margins
  - Optimal_margin_classifier
  - Appendix:_Lagrange_duality

---
<h2 id="Notation">Notation</h2>
We use $$y \in \{1, 1\}$$ to denote the class labels and parameters $w, b$. We write our classifier as
\begin{equation}
  h_{w, b}(x) = g(w^Tx+b)
\end{equation}
Here, $g(z)=1$ if $z \geq 0$ and $g(z)=-1$ otherwise.

<h2 id="Functional_and_geometric_margins">Functional and geometric margins</h2>
Given a training example $(x^{(i)}, y^{(i)})$, we define the **functional margin** of $(w, b)$ with respect to the training example
\begin{equation}
  \hat{\gamma}^{(i)} = y^{(i)}(w^Tx+b)
\end{equation}

Given a training set $$S = \{(x^{(i)}, y^{(i)}); i = 1, ..., m\}$$, we define the **function margin** of $(w, b)$ with respect to $S$, denoted by $\hat{\gamma}$, as
\begin{equation}
  \hat{\gamma}= \min_{i=1, ..., m} \hat{\gamma}^{(i)}
\end{equation}

We define the **geometric margin** of $(w, b)$ with respect to a training example $(x^{(i)}, y^{(i)})$ to be
\begin{equation}
  \gamma^{(i)}=y^{(i)}((\frac{w}{||w||})^T x^{(i)}+\frac{b}{||w||})
\end{equation}

Given a training set $$S = \{(x^{(i)}, y^{(i)}); i = 1, ..., m\}$$, we define the **geometric margin** of $(w, b)$ with respect to $S$, denoted by $\hat{\gamma}$, as
\begin{equation}
  \gamma = \min_{i=1, ..., m} \gamma^{(i)}
\end{equation}

<h2 id="Optimal_margin_classifier">The optimal margin classifier</h2>
Optimization problem for SVM:
\begin{equation}
\begin{aligned}
  max_{\gamma, w, b} \quad &\hat{\gamma} \newline
  s.t. \quad &y^{(i)}(w^T x^{(i)}+b) \geq \hat{\gamma}, i=1, ..., m \newline
  &||w||=1
\end{aligned}
\end{equation}

We can transform it to:
\begin{equation}
\begin{aligned}
  max_{\gamma, w, b} \quad &\frac{\hat{\gamma}}{||w||} \newline
  s.t. \quad &y^{(i)}(w^T x^{(i)}+b) \geq \hat{\gamma}, i=1, ..., m \newline
\end{aligned}
\end{equation}

And since we can add an arbitrary scaling constraint on $w$ and $b$ without changing anything, we can make $\hat{\gamma}=1$ and transform the optimization problem to:
\begin{equation}
\begin{aligned}
  max_{\gamma, w, b} \quad &\frac{1}{2}||w||^2 \newline
  s.t. \quad &y^{(i)}(w^T x^{(i)}+b) \geq 1, i=1, ..., m \newline
\end{aligned}
\end{equation}
Its solution gives us the **optimal margin classifier**.

We can write the constraints as
\begin{equation}
  g_i(w) = -y^{(i)}(w^Tx^{(i)}+b)+1 \leq 0
\end{equation}
From the KKT dual complementarity condition, we will have $\alpha_i >0$ only for the training examples that have functional margin exactly equal to one ($g_i(w)=0$).

**Support vectors**: the points that are on the line which is parallel to the decision boundary and has point on it.

Then we try to express our algorithm in terms of only the inner product $\langle x^{(i)}, x^{(j)} \rangle$:
\begin{equation}
  \mathcal{L}(w, b, \alpha)=\frac{1}{2}||w||^2-\sum_{i=1}^m \alpha_i[y^{(i)}(w^T x^{(i)}+b)-1]
\end{equation}

We first try to minimize $\mathcal{L}(w, b, \alpha)$ with respect to $w$ and $b$ (for fixed \alpha) to get $\theta_{\mathcal{D}}$:
\begin{aligned}
  \nabla_w \mathcal{L}(w, b, \alpha)=w-\sum_{i=1}^m \alpha_i y^{(i)}x^{(i)} &= \mathbf{0} \newline
  \nabla_b \mathcal{L}(w, b, \alpha)=\sum_{i=1}^m \alpha_i y^{(i)} &= 0
\end{aligned}

Thus,
\begin{aligned}
  \sum_{i=1}^m \alpha_i y^{(i)}x^{(i)} &= w \newline
  \sum_{i=1}^m \alpha_i y^{(i)} &= 0
\end{aligned}

<h2 id="Appendix:_Lagrange_duality">Appendix: Lagrange duality</h2>
The **primal** optimization problem:
\begin{equation}
\begin{aligned}
  \min \quad &f(w) \newline
  s.t. \quad &g_i(w) \leq 0, \quad i=1, ..., k \newline
  &h_i(w)=0, \quad i=1, ..., l.
\end{aligned}
\end{equation}

Define the **generalized Lagrangian**:
\begin{equation}
  \mathcal{L}(w, \alpha, \beta)=f(x)+\sum_{i=1}^k \alpha_i g_i(w)+ \sum_{i=1}^l \beta_i h_i(w)
\end{equation}
where variables $\alpha$'s and $\beta$'s are called the **Lagrange multipliers**.

Primal and dual problems can be related as:
\begin{equation}
  d^* = \max_{\alpha, \beta: \alpha_i \geq 0} \min_w \mathcal{L}(w, \alpha, \beta) \leq \min_w \max_{\alpha, \beta: \alpha_i \geq 0} \mathcal{L}(w, \alpha, \beta) = p^*
\end{equation}

Suppose $f$ and $g_i$'s are convex, and the $h_i$'s are affine. Suppose further that the constraints $g_i$ are (strictly) feasible, which means that there exists some $w$ so that $g_i(w)<0$ for all $i$. Thus, there must exist $w^* ,\alpha^* , \beta^* $ so that $w^* $ is the solution to the primal problem, $\alpha^* , \beta^* $ are the solution to the dual problem, and moreover $p^* = d^* = \mathcal{L}(w^* , \alpha^* , \beta^* )$. Moreover, $w^* ,\alpha^* , \beta^* $ satisfy the **Karush-Kuhn-Tucker (KKT) conditions**:
$$ \begin{align}
  \frac{\partial}{\partial w_i}\mathcal{L}(w^* , \alpha^* , \beta^* ) &= 0, \quad i=1, ..., n \tag{1} \newline
  \frac{\partial}{\partial \beta_i}\mathcal{L}(w^* , \alpha^* , \beta^* ) &= 0, \quad i=1, ..., l \tag{2} \newline
  \alpha_i^* g_i(w^* ) &= 0, \quad i=1, ..., k \tag{3} \newline
  g_i(w^* ) &\leq 0, \quad i=1, ..., k \tag{4} \newline
  \alpha^*  &\geq 0, \quad i=1, ..., k \tag{5} \newline
\end{align} $$
where Equation (3) is called the KKT **dual complementarity** condition.
