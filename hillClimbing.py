import random

def generate_initial_solution(jobs, employees):
  solution = {}
  for job in jobs:
    employee = random.choice(list(employees.keys()))
    solution[job] = employee
  return solution

def evaluate_solution(solution, jobs, employees):
  total_time = 0
  for job, employee in solution.items():
    start_time, end_time = jobs[job]
    start_time = max(start_time, employees[employee][0])
    end_time = min(end_time, employees[employee][1])
    total_time += end_time - start_time
  return total_time

def improve_solution(solution, jobs, employees):
  best_solution = solution.copy()
  for job in jobs:
    for employee in employees:
      new_solution = solution.copy()
      new_solution[job] = employee
      if evaluate_solution(new_solution, jobs, employees) > evaluate_solution(best_solution, jobs, employees):
        best_solution = new_solution
  return best_solution

def hill_climbing(jobs, employees, max_iterations):
  solution = generate_initial_solution(jobs, employees)
  for _ in range(max_iterations):
    solution = improve_solution(solution, jobs, employees)
  return solution

if __name__ == "__main__":
  jobs = {
    1: (0, 10),
    2: (0, 15),
    3: (0, 20),
    4: (0, 25),
    5: (0, 30),
  }
  employees = {
    0: (0, 8),
    1: (0, 10),
    2: (0, 12),
    3: (0, 14),
    4: (0, 16),
  }
  solution = hill_climbing(jobs, employees, 100)
  print(solution)