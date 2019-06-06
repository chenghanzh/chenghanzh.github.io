---
layout: csPost
title:  "Convex Optimization"
subtitle: ""
categories: [cs]
classification: [cs-ml]
tag: [cs-ml-cs229]
identifier:
  - Weak_duality
  - Strong_duality
---

<h2 id="Weak_duality">Weak duality</h2>
**Theorem 2.1** (Weak duality) *For any matrix $A=(a_{ij}) \in \mathbb(R)^{m \times n}$, it is always the case that*
\begin{equation}
  \max_j \min_i a_{ij}=d^* \leq p^* = \min_i \max_j a_{ij}
\end{equation}

Original optimization problem:
\begin{equation}
\begin{aligned}
  \underset{j}{\text{minimize}} \; &f(x) \newline
  \text{subject to} \; &g_i(x) \leq 0, i=1, ..., m \newline
  &hi(x)=0, i=1, ..., p.
\end{aligned}
\end{equation}

Define the **generalized Lagrangian** to be
\begin{equation}
  \mathcal{L}=f(x)+\sum_{i=1}^m \lambda_i g_i(x)+ \sum_{i=1}^p \nu_i h_i(x)
\end{equation}
where variables $\lambda$ and $\nu$ are called the **dual variables** (or **Lagrange multipliers**) and variables x are known as the **primal variables**.

The **primal** problem:
\begin{equation}
\begin{aligned}
  p^* &=\min_x \max_{\lambda, \nu: \lambda_i \geq 0} \mathcal{L}(x, \lambda, \nu) \newline
  &= \min_x \theta_P(x)
\end{aligned}
\end{equation}
where $\theta_P(x):= \max_{\lambda, \nu: \lambda_i \geq 0} \mathcal{L}(x, \lambda, \nu)$. Computing $ p^* $ is equivalent to our original convex optimization problem.

The **dual** problem:
\begin{equation}
\begin{aligned}
  d^* &=\max_{\lambda, \nu: \lambda_i \geq 0} \min_x \mathcal{L}(x, \lambda, \nu) \newline
  &= \max_{\lambda, \nu: \lambda_i \geq 0} \theta_D(x)
\end{aligned}
\end{equation}
where $\theta_D(x):= \min_x \mathcal{L}(x, \lambda, \nu)$. Dual problems can often be easier to solve than their corresponding primal problems.

**Weak duality** for general optimization problems:
\begin{equation}
  d^* \leq p^*
\end{equation}

<h2 id="Strong_duality">Strong duality</h2>
**Strong duality**: $ d^* = p^* $.

Conditions which guarantee strong duality for convex optimization problems are known as **constraint qualifications**. The most commonly invoked constraint qualification is **Slater's condition**:

**Theorem 2.2** *Consider a convex optimization problem whose corresponding primal and dual problems are given by $P'$ and $D'$ . If there exists a primal feasible $x$ for which each inequality constraint is strictly satisfied (i.e., $g_i(x)<0$), then* $ p^* = d^* $.  

<h2 id="KKT_conditions">The KKT conditions</h2>
For constraint convex programming, the **Karush-Kuhn-Tucker (KKT) necessary and sufficient conditions** characterize the optima of primal/dual problems.

**Theorem 2.3** If $\tilde{x}$ is primal feasible and $(\tilde{\lambda}, \tilde{\nu})$ are dual feasible, and if
$$ \begin{align}
  \nabla_x \mathcal{L}(\tilde{x}, \tilde{\lambda}, \tilde{\nu}) &= \mathbf{0} \tag{KKT1} \\
  \tilde{\lambda}_i g_i(\tilde{x}) &= 0, i=1, ..., m, \tag{KKT2}
\end{align} $$
then $\tilde{x}$ is primal optimal, $(\tilde{\lambda}, \tilde{\nu})$ are dual optimal, and strong duality holds.
